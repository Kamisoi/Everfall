# Everfall

This is the official repository and issue-tracker for the modpack Everfall, for Minecraft 1.16.5

# Setup

### For Contributors and Testers

Follow these steps to setup your workspace:

## MultiMC (Linux / Windows / Mac)

#### Setup MultiMC Instance

1. Download [MultiMC](https://multimc.org/#Download) and [Git](https://git-scm.com/downloads) if you haven't already.
2. Open MultiMC.
3. Click Add Instance, choose Minecraft 1.16.5, click Ok.
4. Click Edit Instance.
5. Click Install Forge, pick the latest version.

#### Repository Setup

6. Fork and clone the repository into the MultiMC Instance.
7. Open the folder of the MultiMC Instance you made (step 1-5), and go into the .minecraft folder - Open a terminal/command line and use the following commands:

```sh
git init                                            # Initialize git in folder
git remote add origin URLToYourForkOfTheModpack     # Set remote origin to your fork of the modpack
git remote -v                                       # Verify remote
git fetch
git checkout main
git pull
```

You're done!
If you run into issues, verify that you are using the right Minecraft and Forge version in your MultiMC instance!
