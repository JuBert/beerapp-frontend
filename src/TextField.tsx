import React from 'react'

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: () => void;
    obj?: {
        f1: string
    }
}

export const TextField: React.FC<Props> = () => {
    return (
        <div>
            <input />
        </div>
    )
}
