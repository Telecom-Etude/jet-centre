'use client';

import { gmail_v1 } from 'googleapis';
import { useState } from 'react';

import { listEmails } from '@/google/mail/readonly';

import { Button } from '../ui/button';

export default function MailBrowser() {
    const [emails, setEmails] = useState<gmail_v1.Schema$Message[] | undefined>();

    const refreshEmails = () => {
        listEmails().then((emails) => setEmails(emails));
    };

    return (
        <div className="space-y-main">
            <Button onClick={refreshEmails}>Refresh</Button>

            {emails && (
                <>
                    <h2 className="text-primary font-bold italic">Vos 5 emails les plus récents</h2>
                    <div className="space-y-main">
                        {emails?.slice(0, 5).map((email, key) => (
                            <p
                                key={key}
                                className={
                                    email.labelIds?.includes('UNREAD') ? 'font-semibold' : ''
                                }
                            >
                                {email.snippet + '...'}
                            </p>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
