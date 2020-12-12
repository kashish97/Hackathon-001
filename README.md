# Grammarly Clone

For local setup  follow the instructions below:
- Run git clone https://github.com/kashish97/Hackathon-001.git 
- This will create a local repo on your machine
- Run index.html.

For deployment:
- First run cd Projects/my-site on you terminal/cmd
- create an index.php file. We can trick Heroku to deploy a static site by including 1 dynamic file.The index.php file will be served by Heroku before your index.html. We need   to make the browser redirect from index.php to index.html. We only need to include one line of PHP code.
- Command : "<?php header( 'Location: /index.html' ) ;  ?>"
- Then we’ll use the command line tool called git to initialize or create a version of the site you want to deploy. To do that run the command.
- git init
- git add.
- git commit -m "My site ready for deployment."
- Now you want to create your site on Heroku. If you’re already logged in (because you ran heroku login  earlier), you can issue the following command:
- heroku apps:create my-static-site-example
- If the name isn’t taken you can deploy your site using git.
- git push heroku master
- Once you see “remote: Verifying deploy…. done.”
- You can now visit your site at https://<whatever-name-you-selected>.herokuapp.com/ or my example site here https://my-static-site-example.herokuapp.com/.
