FROM jenkins/jenkins
MAINTAINER Pedro Jose de Souza Neto

USER root
RUN apt-get update \
    && apt-get install nodejs \
    && apt-get install build-essential libssl-dev \
    && apt-get install npm \
    && curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh -o install_nvm.sh \
    && bash install_nvm.sh \
    && source ~/.profile
# install version on nvm
RUN nvm install 6.9.1 \
    && nvm use 6.9.1
# install linuxbrew
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)" \
    && echo "export PATH='$(brew --prefix)/bin:$(brew --prefix)/sbin'":'"$PATH"' >>~/.profile \
    && source ~/.profile \
    && brew install watchman
# install react-native
RUN npm install -g react-native-cli 
# install ruby and add gem bundler
RUN gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB \
    && apt-get install curl \
    && \curl -sSL https://get.rvm.io -o rvm.sh \
    && cat rvm.sh | bash -s stable \
    && source ~/.rvm/scripts/rvm \
    && rvm install ruby --default \
    && gem install bundler
# install sdk
RUN export ANDROID_HOME=/opt/android-sdk-linux \
    && sudo mkdir -p $ANDROID_HOME \
    && cd $ANDROID_HOME \
    && sudo wget https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip \
    && apt-get install unzip \
    && sudo unzip sdk-tools-linux-4333796.zip \
    && cd tools \
    && sudo ./android update sdk --no-ui \
    && echo "export ANDROID_HOME='/opt/android-sdk-linux'" >>~/.profile \
    && echo "export PATH='$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH'" >>~/.profile \
    && source ~/.profile \
    && sudo chmod -R 755 /opt/android-sdk-linux 
# drop back to the regular jenkins user - good practice
USER jenkins