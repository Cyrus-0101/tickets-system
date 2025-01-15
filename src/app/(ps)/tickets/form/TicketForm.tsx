"use client";
import React from 'react'

import { Form, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';

import { insertCustomerSchema, InsertCustomer, SelectCustomer } from '@/zod-schema/customer'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { InsertTicket, insertTicketSchema, SelectTicket } from '@/zod-schema/tickets';

type Props = {
    customer: SelectCustomer,
    ticket?: SelectTicket,
}

export default function TicketForm({
    customer, ticket
}: Props) {
    const defaultValues: InsertTicket = {
        id: ticket?.id ?? "(New)",
        customerId: ticket?.customerId ?? customer.id,
        title: ticket?.title ?? '',
        description: ticket?.description ?? '',
        completed: ticket?.completed ?? false,
        mech: ticket?.mech ?? 'new-ticket@example.com',
    }

    const form = useForm<InsertTicket>({
        mode: 'onBlur',
        resolver: zodResolver(insertTicketSchema),
        defaultValues,
    })

    async function submitForm(data: InsertTicket) {
        console.log(data)
    }

    return (
        <div className="flex flex-col gap-1 sm:px-8">
            <div>
                <h2 className="text-2xl font-bold">
                    {ticket?.id
                        ? `Edit Ticket # ${ticket.id}`
                        : "New Ticket Form"
                    }
                </h2>
            </div>
            <form
                onSubmit={form.handleSubmit(submitForm)}
                className="flex flex-col sm:flex-row gap-4 sm:gap-8"
            >

                <p>{JSON.stringify(form.getValues())}</p>

            </form>

        </div>
    )
}