'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';
import { Textarea } from '@/components/ui/textarea';
import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { sendEmail } from '@/lib/actions/sendEmail';

export default function FormContent() {
  const [isContactLoading, setIsContactLoading] = useState<boolean>(false);

  const locale = useLocale();
  const isArabic = locale === 'ar';
  const t = useTranslations('ContactSection.ContactForm');

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t('name.zod'),
    }),
    email: z.string().email({
      message: t('email.zod'),
    }),
    hcwh: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      hcwh: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsContactLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('hcwh', values.hcwh || '');

      const result = await sendEmail(formData);

      if (!result.error) {
        toast.success(t('success'));
        form.reset();
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(t('error'));
    } finally {
      setIsContactLoading(false);
    }
  }

  return (
    <div
      className="w-full flex flex-col justify-center items-start sm:px-6 laptop:px-12 laptop_l:px-32 pt-12 pb-20"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <h1
        className={cn(
          'tracking-wide capitalize sm:text-3xl tablet:text-6xl w-full text-center mt-12',
          isArabic && 'tajawal-font'
        )}
      >
        {t('heading')}
      </h1>
      <br />
      <br />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 font-sans w-full"
        >
          <div className="grid sm:grid-cols-1 tablet:grid-cols-2 sm:gap-4 tablet:gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> {t('name.label')} </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('name.placeholder')}
                      {...field}
                      className="bg-transparent !border-b border-black outline-none"
                    />
                  </FormControl>
                  <FormDescription>{t('name.description')}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('email.label')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('email.placeholder')}
                      {...field}
                      className="bg-transparent !border-b border-black outline-none"
                    />
                  </FormControl>
                  <FormDescription>{t('email.description')}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="hcwh"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('hcwh.label')}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t('hcwh.placeholder')}
                    {...field}
                    className="bg-transparent !border-b border-black outline-none resize-none sm:rounded-2xl tablet:rounded-3xl laptop:rounded-full p-4"
                  />
                </FormControl>
                <FormDescription>{t('hcwh.description')}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className={cn(
              'w-full rounded-full uppercase',
              isContactLoading && 'opacity-60'
            )}
            disabled={isContactLoading}
          >
            {isContactLoading
              ? t('contactButton.loading')
              : t('contactButton.default')}
          </Button>
        </form>
      </Form>
    </div>
  );
}
