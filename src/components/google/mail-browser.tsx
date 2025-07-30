import { listEmails } from '@/google/mail/readonly';

export default async function MailBrowser() {
    const emails = await listEmails();

    return (
        <div className="space-y-main">
            <h2 className="text-primary font-bold italic">Vos 5 emails les plus récents</h2>
            <div className="space-y-main">
                {emails?.slice(0, 5).map((email, key) => (
                    <p
                        key={key}
                        className={email.labelIds?.includes('UNREAD') ? 'font-semibold' : ''}
                    >
                        {email.snippet + '...'}
                    </p>
                ))}
            </div>
        </div>
    );
}
