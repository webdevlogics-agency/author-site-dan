import { type Component, createResource } from 'solid-js'
import { NEWSLETTER } from '~/consts'

type FormFields = {
  unsubscribeId: string
}

const UnSubscribeForm: Component<FormFields> = (props) => {
  const fetchData = async () => {
    const dataToSubmit = {
      unsubscribeId: props.unsubscribeId,
    }
    const res = await fetch(
      'https://swqw7hmtil.execute-api.us-west-2.amazonaws.com/v1/unsubscribe',
      // 'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        body: JSON.stringify(dataToSubmit),
        mode: 'no-cors',
        headers: {
          'Content-type': 'application/json',
        },
      },
    )
    return res
  }
  const [users] = createResource(fetchData)

  return (
    <div class='m-auto'>
      {users.loading && <p class='text-3xl'>Unsubscribing...</p>}
      {users() && (
        <div class='flex flex-col gap-4'>
          <p class='text-3xl'>
            You have been successfully unsubscribed from {NEWSLETTER}!
          </p>
          <p class='text-xl'>Thank you</p>
        </div>
      )}
    </div>
  )
}
export default UnSubscribeForm
