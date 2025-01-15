import React from 'react'
import * as Sentry from "@sentry/nextjs";

import BackButton from '@/components/BackButton';

import { getCustomer } from '@/lib/queries';
import CustomerForm from './CustomerForm';

type Props = {
    searchParams: Promise<{ [key: string]: string | undefined }>
}

const page = async ({ searchParams }: Props) => {
  try {

    const { customerId } = await searchParams;

    // Edit customer if exists.
    if (customerId) {
        const customer = await getCustomer(customerId);

        if (!customer) {
            return (
                <>
                    <BackButton title="Go Back" variant="default" />
                    <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
                </>
            )
        }

        console.log(customer);

        // Edit existing customer
        return <CustomerForm customer={customer} />

    } else {
        // TO-DO: Add new customer
        return <CustomerForm />
    }

  } catch (error) {
    if (error instanceof Error) {
        Sentry.captureException(error)
        throw error;
    }
    
  }
}

export default page