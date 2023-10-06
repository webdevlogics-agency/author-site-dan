import { createStore } from 'solid-js/store'
import { showToast } from '~/components/ui/toast'
import { v4 as uuidv4 } from 'uuid'
let date = new Date()

type FormFields = {
  email: string
}

const submit = async (form: FormFields) => {
  const dataToSubmit = {
    email: form.email,
    unsubscribeId: uuidv4(),
  }

  const res = await fetch(import.meta.env.PUBLIC_AWSAPI, {
    method: 'POST',
    body: JSON.stringify(dataToSubmit),
  })
  console.log(res)
  if (res.status === 200) {
    showToast({
      title: 'Message Submitted',
      description: `${date}`,
    })
  } else {
    showToast({
      title: 'Message NOT Submitted!',
      description: `${date}`,
      variant: 'destructive',
    })
  }
  return res
}

const useForm = () => {
  const [form, setForm] = createStore<FormFields>({
    email: '',
  })

  const updateFormField = (fieldName: string) => (event: Event) => {
    const inputElement = event.currentTarget as HTMLInputElement
    setForm({
      [fieldName]: inputElement.value,
    })
  }

  return { form, submit, updateFormField }
}

export { useForm }
