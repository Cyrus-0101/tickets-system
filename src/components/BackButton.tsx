"use client";
import { useRouter } from 'next/navigation';
import React, { ButtonHTMLAttributes } from 'react'
import { Button } from './ui/button';
import { CircleChevronLeftIcon } from 'lucide-react';

type Props = {
    title: string,
    className?: string,
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined,
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BackButton = ({ title, variant, className, ...props }: Props) => {
  const router = useRouter();
  
    return (
        <Button
            variant={variant}
            className={className}
            title={title}
            onClick={() => router.back()}
            {...props}
        >
            {title}
            <CircleChevronLeftIcon />
        </Button>
  )
}

export default BackButton