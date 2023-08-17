import { defineAdditionalSignupFields } from '@wasp/types/index.js'

export const fields = defineAdditionalSignupFields({
  address: {
    get: (data) => data.address,
    validate: (value) => {
      if (!value || value.length < 5) {
        throw new Error('Address is required')
      }
    },
  },
})
