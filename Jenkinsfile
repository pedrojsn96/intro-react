pipeline {
  agent any
  triggers { pollSCM('H */4 * * 1-5') }
  stages {
    stage('NPM SETTING') {
      steps {
        sh '''#!/usr/local/bin/zsh
source $HOME/.zshrc
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
cd TeachersProject'''
        echo 'EXECUTA OS TESTES'
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
        echo 'CHEGAMOS AO FIM'
        slackSend(baseUrl: 'https://pedrocompany.slack.com/services/hooks/jenkins-ci/', channel: 'jenkins-notifications', token: '2LpDh91ZUFjnvG6NdwYHAQsx', message: 'PIPELINE JENKINS')
      }
    }
  }
}