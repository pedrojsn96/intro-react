require 'calabash-android/calabash_steps'

Given(/^the app has launched$/) do
  wait_for do
    !query("*").empty?
  end
end

Then("I see home page") do
  wait_for_element_exists("* marked:'Teachers List'")
  sleep(5)
  puts "Home Page"
  sleep(5)
end

When("I press some teacher") do
  sleep(2)
  touch("android.widget.EditText id:'NoResourceEntry-62'")
end

Then("I go to teacher detail") do
    wait_for_element_exists("* marked:'Teacher Detail'")
    sleep(5)
    puts "Teacher Detail Page"
    sleep(5)
end

# When("I press email field") do
#   sleep(2)
#   touch("android.widget.EditText id:'NoResourceEntry-62'")
# end

# When("put {string}") do |string|
#   sleep(2)
#   keyboard_enter_text(string)
#   hide_soft_keyboard
# end

# When("press senha field") do
#   sleep(2)
#   touch("android.widget.EditText id:'NoResourceEntry-64'")
# end

# When("press on Acessar button") do
#   sleep(2)
#   touch("android.widget.TextView marked:'Acessar'")
# end

# Then("I logged unsuccessfully") do
#   wait_for_element_exists("* marked:'Erro! verifique o seu email e sua senha e tente novamente.'")
#   sleep(5)
#   puts "Login nao realizado"
#   sleep(5)
# end
# Then("I logged successfully") do
#   wait_for_element_exists("* marked:'Desafios'")
#   puts "Login realizado"
#   sleep(5)
# end


# When("I press Esqueceu sua senha") do
#     touch("com.facebook.react.views.text.ReactTextView id:'NoResourceEntry-72'")
#     sleep(5)
#   end
  
# Then("I see Pagina de recuperacao de senha") do
#     wait_for_element_exists("* marked:'Cancelar Recuperação de Senha'")
#     sleep(5)
#     puts "Voce esta na pagina de recuperacao de senha"
# end