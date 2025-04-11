'use server';

import React from 'react';
import { Resend } from 'resend';
import { getErrorMessage, validateString } from '../utils';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('name');
  const message = formData.get('hcwh');
  const senderName = formData.get('name');

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (!validateString(senderName, 500)) {
    return {
      error: 'Invalid sender name',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Codista Contact <onboarding@resend.dev>',
      to: 'abdelhadibouchadi2@gmail.com',
      subject: 'Contact Form Codista',
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
        senderName: senderName,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
