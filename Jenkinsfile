pipeline {
	agent any
	
	environment{
		IMAGE_NAME="my-app"
	}
	
	stages{
		stage('Cloning the repository'){
			steps{
		  echo "Cloning the repository"
		  git branch: 'main', url:"https://github.com/AmrutaJayanti/my-node-jenkin-app.git"
			}
		 }
		
		stage('Build the Docker image'){
			steps{
		  echo "Building the Docker image"
		  sh 'docker build -t $IMAGE_NAME:latest .'
			}
		}
		
		stage('Running the Docker Container'){
			steps{
		  echo "Running the container"
		  sh 'docker run -d -p 3000:3000 -- name myapp $IMAGE_NAME:latest'
		  sh 'docker ps'
		}
		}
	}
	
	post{
		always{
		   echo "Cleaning up"
		   sh 'docker stop myapp || true'
		   sh 'docker rm mapp || true'
		}
		
 	}
 	
}
