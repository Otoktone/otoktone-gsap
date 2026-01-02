'use client';

import { useEffect, useState, ReactNode } from 'react';

interface EmailProps {
    className?: string;
    children?: ReactNode;
}

export default function Email({ className, children }: EmailProps) {
    const [email, setEmail] = useState('');

    useEffect(() => {
        const user = 'alexandre.desmot';
        const domain = 'otoktone.fr';
        setEmail(`${user}@${domain}`);
    }, []);

    if (!email) return null;

    return (
        <a href={`mailto:${email}`} className={className}>
            {children ?? email}
        </a>
    );
}
