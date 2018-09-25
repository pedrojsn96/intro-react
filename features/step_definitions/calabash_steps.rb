require 'calabash-android/calabash_steps'

Given(/^the app has launched$/) do
  wait_for do
    !query("*").empty?
  end
end

Then("I see home page") do
  wait_for_element_exists("* marked:'Teachers List'")
  puts "Home Page"
  sleep(5)
end

When("I press some teacher") do
  touch("* marked:'TeacherItem' index:0")
  sleep(2)
end

Then("I go to teacher details") do
    wait_for_element_exists("all * marked:'Teacher Details'")
    puts "Teacher Details Page"
    sleep(2)
end