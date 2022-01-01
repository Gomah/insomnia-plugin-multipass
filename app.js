const Multipassify = require('@gomah/multipassify');

module.exports.templateTags = [
  {
    name: 'Multipass',
    displayName: 'Multipass Token',
    description: 'Generate Multipass token for a customer',
    args: [
      {
        displayName: 'Multipass Secret',
        required: true,
        description:
          'The Multipass secret can be found in your shop Admin (Settings > Checkout > Customer Accounts).',
        type: 'string',
        placeholder: '',
      },
      {
        displayName: 'Email',
        type: 'string',
        placeholder: 'john@doe.com',
      },
      {
        displayName: 'Return to (optional)',
        type: 'string',
        placeholder: '',
      },
    ],
    run(context, secret, email, returnTo) {
      const multipassify = new Multipassify(secret);
      const customerData = {
        email,
        return_to: returnTo,
        created_at: new Date().toISOString(),
      };

      return multipassify.encode(customerData);
    },
  },
];
