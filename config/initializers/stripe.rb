Rails.configuration.stripe = {
  :publishable_key => ENV['pk_test_gbvyNMHRqJfUgV8tK0bqdngM'],
  :secret_key      => ENV['sk_test_ASRHKIu6G87i4Yfiivg8J9TS']
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]

# live secret_key: sk_live_mhyTkEIAtZBV6QTAs7U4wLgx

#live publishable_key: pk_live_hk4D2o1kOpyCYCZIgXBfUKc1

# <script>
#   <%= form_tag charges_path do %>
#   <article>
#     <label class="amount">
#       <span>Amount: $5.00</span>
#     </label>
#   </article>

#   <script src="https://checkout.stripe.com/checkout.js" class="stripe-button"
#           data-key="<%= Rails.configuration.stripe[:publishable_key] %>"
#           data-description="A month's subscription"
#           data-amount="500"></script>
# <% end %>
  
# </script>