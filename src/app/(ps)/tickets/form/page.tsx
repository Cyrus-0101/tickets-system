import React from 'react'
import * as Sentry from "@sentry/nextjs";

import BackButton from '@/components/BackButton';

import { getCustomer, getTicket } from '@/lib/queries';
import TicketForm from './TicketForm';

type Props = {
    searchParams: Promise<{ [key: string]: string | undefined }>
}

const page = async ({ searchParams }: Props) => {
  try {

    const { customerId, ticketId } = await searchParams;

    // Edit customer if exists.
    if (!customerId && !ticketId) {
        return (
            <>
                <BackButton title="Go Back" variant="default" />
                <h2 className="text-2xl mt-16 mb-2">Customer ID required to load ticket form</h2>
            </>
        )
    }
    

    if (customerId) {
        const customer = await getCustomer(customerId);

        if(!customer) {
            return (
                <>
                    <BackButton title="Go Back" variant="default" />
                    <h2 className="text-2xl mt-16 mb-2">Customer ID #{customerId} not found</h2>
                </>

            )
        }

        if(!customer.active) {
            return (
                <>
                    <BackButton title="Go Back" variant="default" />
                    <h2 className="text-2xl mt-16 mb-2">Customer ID #{customerId} not active</h2>
                </>
            )
        }

        console.log(customer);

        return <TicketForm customer={customer} />
    }

    // Eddit ticket form
    if (ticketId) {
        const ticket = await getTicket(ticketId);

        if(!ticket) {
            return (
                <>
                    <BackButton title="Go Back" variant="default" />
                    <h2 className="text-2xl mt-16 mb-2">Ticket ID #{ticketId} not found</h2>
                </>

            )
        }

        const customer = await getCustomer(ticket.customerId);

        console.log("Ticket: ", ticket);
        console.log("Customer: ", customer);

        return <TicketForm customer={customer} ticket={ticket} />

        // TO-DO: return ticket form
    }
  } catch (error) {
    if (error instanceof Error) {
        Sentry.captureException(error);
        throw error;
    }
    
  }
}

export default page