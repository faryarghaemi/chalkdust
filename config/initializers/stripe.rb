Rails.configuration.stripe = {
  :publishable_key => ENV['PUBLISHABLE_KEY'],
  :secret_key      => ENV['SECRET_KEY']
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]

# live secret_key: sk_live_mhyTkEIAtZBV6QTAs7U4wLgx

#live publishable_key: pk_live_hk4D2o1kOpyCYCZIgXBfUKc1

