import { useFormContext } from 'react-hook-form'
import { FormContainer, FormContent } from './styles'
import { InputText } from '../../../Components/InputText'
import { CheckoutFormData } from '..'

export function CheckoutForm() {
  const { register, formState } = useFormContext<CheckoutFormData>()

  const { errors } = formState

  return (
    <FormContainer>
      <FormContent>
        <InputText
          id="zip_code"
          placeholder="CEP"
          style={{ minWidth: '200px', width: '35%' }}
          errorMessage={errors.zip_code?.message}
          {...register('zip_code')}
        />
      </FormContent>
      <FormContent>
        <InputText
          id="street"
          placeholder="Rua"
          style={{ width: '100%' }}
          errorMessage={errors.street?.message}
          {...register('street')}
        />
      </FormContent>
      <FormContent>
        <InputText
          id="number"
          placeholder="Número"
          style={{ minWidth: '200px', width: '35%' }}
          errorMessage={errors.number?.message}
          {...register('number')}
        />
        <InputText
          id="complement"
          placeholder="Complemento"
          style={{ width: '65%' }}
          errorMessage={errors.complement?.message}
          {...register('complement')}
        />
      </FormContent>
      <FormContent>
        <InputText
          id="neighborhood"
          placeholder="Bairro"
          style={{ minWidth: '200px', width: '35%' }}
          errorMessage={errors.neighborhood?.message}
          {...register('neighborhood')}
        />
        <InputText
          id="city"
          placeholder="Cidade"
          style={{ width: '55%' }}
          errorMessage={errors.city?.message}
          {...register('city')}
        />
        <InputText
          id="state"
          placeholder="UF"
          style={{ minWidth: '60px', width: '10%' }}
          errorMessage={errors.state?.message}
          {...register('state')}
        />
      </FormContent>
    </FormContainer>
  )
}
