pipeline {
  agent any

  environment {
    PROJECT_DIR = "/home/docker/webservice/propstgonz-web/propstgonz-astro"
  }

  stages {

    stage('Update production code') {
      steps {
        sh """
          cd ${PROJECT_DIR}
          echo "Updating code in production directory..."
          git fetch --all
          git reset --hard origin/main
        """
      }
    }

    stage('Install Node & Dependencies') {
      steps {
        sh """
          cd ${PROJECT_DIR}

          if ! command -v node >/dev/null 2>&1; then
            echo "Node not found. Installing Node 20..."
            curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
            sudo apt-get install -y nodejs
          fi

          npm install
        """
      }
    }

    stage('Build Astro') {
      steps {
        sh """
          cd ${PROJECT_DIR}
          npm run build
        """
      }
    }

    stage('Recreate web container') {
      steps {
        sh """
          cd ${PROJECT_DIR}
          sudo docker compose up -d --force-recreate
        """
      }
    }
  }

  post {
    success {
      echo "Deployment completed successfully."
    }
    failure {
      echo "Deployment failed."
    }
  }
}
