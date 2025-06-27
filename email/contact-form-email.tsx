import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
  Img,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  senderName: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  senderName,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head>
        <title>New Contact Form Submission</title>
      </Head>
      <Preview>
        New message from {senderName} via CODISTA Portfolio Contact Form
      </Preview>
      <Tailwind>
        <Body className="bg-[#f6f6f6] my-auto mx-auto font-sans">
          <Container className="max-w-[600px] mx-auto">
            {/* Header Banner */}
            <Section className="mt-8">
              <Img
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&h=150&fit=crop"
                alt="Header"
                width="600"
                height="150"
                className="rounded-t-lg object-cover"
              />
            </Section>

            {/* Main Content */}
            <Section className="bg-white px-8 py-12 rounded-b-lg shadow-lg">
              {/* Logo Section */}
              <div className="text-center mb-8">
                <Heading className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent m-0">
                  New Message Received
                </Heading>
              </div>

              {/* Message Content */}
              <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <Text className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                  "{message}"
                </Text>
              </div>

              <Hr className="border-gray-200 my-8" />

              {/* Sender Info */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <Text className="text-gray-800 mb-4">
                  <span className="font-bold text-blue-600">From:</span>{' '}
                  <span className="capitalize">{senderName}</span>
                </Text>
                <Text className="text-gray-800">
                  <span className="font-bold text-blue-600">Email:</span>{' '}
                  <Link
                    href={`mailto:${senderEmail}`}
                    className="text-blue-500 underline"
                  >
                    {senderEmail}
                  </Link>
                </Text>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <Text className="text-center text-gray-500 text-sm">
                  This email was sent from CODISTA portfolio contact form.
                  <br />© {new Date().getFullYear()} CODISTA Portfolio. All
                  rights reserved.
                </Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
