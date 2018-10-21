pipeline {
  agent any
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
        emailext(subject: 'TeacherProject', body: 'Segue o build', from: 'pjsn@cin.ufpe.br', to: 'pjsn@cin.ufpe.br', compressLog: true, attachLog: true, attachmentsPattern: 'jlkj')
      }
    }
  }
}