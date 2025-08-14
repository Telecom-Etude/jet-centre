'use client';

import { useState } from 'react';

import { sendHelloWorld } from '@/google/mail/send';

import { Input } from '../ui/input';

export function MailSender() {
    const [value, setValue] = useState('');

    const sendEmail = () => {
        if (value) sendHelloWorld(value);
    };

    return (
        <Input
            onBlur={() => sendEmail()}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}
