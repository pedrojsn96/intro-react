pipeline {
  agent any
  stages {
    stage('NPM SETTING') {
      steps {
        sh '''echo $PATH

echo "pedro"'''
        sh 'export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin'
        sh 'cd TeachersProject/'
        sh 'npm install'
      }
    }
    stage('ANDROID BUILD DEBUG') {
      steps {
        sh 'npm run android:debug'
      }
    }
    stage('ANDROID TESTS') {
      steps {
        echo 'EXECUTA OS TESTES'
      }
    }
    stage('ANDROID RELEASE') {
      steps {
        sh 'npm run android:release'
      }
    }
    stage('DELIVERY') {
      steps {
        emailext(subject: 'TeacherProject', body: 'Segue o build', from: 'pjsn@cin.ufpe.br', to: 'pjsn@cin.ufpe.br', compressLog: true, attachLog: true, attachmentsPattern: 'jlkj')
      }
    }
  }
}