import type { Component } from 'solid-js'

import { useForm } from '~/lib/use-form'

import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

import { Toaster } from '~/components/ui/toast'

const NewsletterForm: Component = () => {
  const { form, updateFormField, submit } = useForm()

  const handleSubmit = async (event: Event) => {
    event.preventDefault()
    await submit(form)
  }

  return (
    <section id='contact' class='m-auto w-full'>
      <div class='container m-auto flex w-full max-w-7xl flex-col items-center gap-6'>
        <form class='w-[300px] rounded md:w-[500px]'>
          <div>
            <div>
              <label for='email' class='mb-2 block font-bold'>
                Email
              </label>
              <Input
                id='email'
                name='email'
                type='text'
                placeholder='your-email@gmail.com'
                onChange={updateFormField('email')}
              />
            </div>
            <div class='mt-8 text-center'>
              <Button onClick={handleSubmit} class='w-full uppercase'>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
      <Toaster />
    </section>
  )
}

export default NewsletterForm
