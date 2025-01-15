"use client";
import React from 'react'

import { Form, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';

import { countyEnum, insertCustomerSchema, InsertCustomer, selectCustomerSchemaType } from '@/zod-schema/customer'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


type Props = {
    customer?: selectCustomerSchemaType,
}

const CustomerForm = ({ customer }: Props) => {
  const defaultValues: InsertCustomer = {
    id: customer?.id,
    first_name: customer?.first_name || '',
    last_name: customer?.last_name || '',
    phone: customer?.phone || '',
    email: customer?.email || '',
    address1: customer?.address1 || '',
    address2: customer?.address2 || '',
    city: customer?.city || '',
    county: (customer?.county || 'Nairobi') as InsertCustomer['county'],
    notes: customer?.notes || '',
    zip: customer?.zip || '',
  }
  const form = useForm<InsertCustomer>({
    mode: 'onBlur',
    resolver: zodResolver(insertCustomerSchema),
    defaultValues,
  });

  const submitForm = (data: InsertCustomer) => {
    console.log(data);
  }

  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div className="">
        <h2 className="text-2xl">
          {customer?.id ? "Edit": "New"} Customer Form
        </h2>
      </div>
        <form
          onSubmit={() => submitForm}
        >

          <p>{JSON.stringify(form.getValues())}</p>
          {/* //Other form fields
          <FormField
            control={form.control}
            name="county"
            render={({ field }) => (
              <FormItem>
                <FormLabel>County</FormLabel>
                <Select
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a county" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(countyEnum.enum).map((county) => (
                      <SelectItem key={county} value={county}>
                        {county}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} 
          />*/}
          {/* Other form fields */}
        </form>
    </div>
  )
}

export default CustomerForm