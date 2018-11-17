pipeline {
  agent any
  stages {
    stage('SETTINGS') {
      steps {
        sh '''#!/usr/local/bin/zsh
source $HOME/.zshrc
source "$HOME/.rvm/scripts/rvm"
bundle install
cd TeachersProject/
npm install'''
      }
    }
    stage('ANDROID BUILD DEBUG') {
      steps {
        sh '''#!/usr/local/bin/zsh
source $HOME/.zshrc
cd TeachersProject
npm run android:debug'''
      }
    }
    stage('ANDROID TESTS') {
      steps {
        sh '''#!/usr/local/bin/zsh
source $HOME/.zshrc
source "$HOME/.rvm/scripts/rvm"
calabash-android resign TeachersProject/android/app/build/outputs/apk/app-debug.apk
cd TeachersProject
npm run android:tests'''
      }
    }
    stage('ANDROID RELEASE') {
      steps {
        sh '''#!/usr/local/bin/zsh
source $HOME/.zshrc
cd TeachersProject
npm run android:release'''
      }
    }
    stage('DELIVERY') {
      steps {
        slackSend(baseUrl: 'https://pedrocompany.slack.com/services/hooks/jenkins-ci/', channel: 'jenkins-notifications', token: '2LpDh91ZUFjnvG6NdwYHAQsx', message: 'CI/CD PIPELINE')
        build 'testfairy'
      }
    }
  }
  triggers {
    pollSCM('H */4 * * 1-5')
  }
}