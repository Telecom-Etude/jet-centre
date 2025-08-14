'use client';

import { useState } from 'react';

import { sendEmail } from '@/google/mail/send';

import { Input } from '../ui/input';

export function MailSender() {
    const [value, setValue] = useState('');
    const [good, setGood] = useState<boolean | undefined>();

    const onBlur = () => {
        if (value) {
            setGood(undefined);
            sendEmail({
                to: value,
                subject: 'Hello, World!',
                html: '<p style="color: red">Hello world</p>"',
                text: 'Hello world',
                replyTo: 'info@telecom-etude.fr',
            }).then((res) => setGood(res));
        }
    };

    return (
        <Input
            onBlur={onBlur}
            className={
                'border-8 ' +
                (good === true
                    ? 'border-green-500'
                    : good === false
                      ? 'border-red-500'
                      : 'border-blue-500')
            }
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}
