ssh -t root@104.236.46.71 "cd /home/rails/idoru && RAILS_ENV=production rake db:migrate"
ssh -t root@104.236.46.71 "cd /home/rails/idoru && RAILS_ENV=production rake assets:precompile"
ssh -t root@104.236.46.71 "service unicorn restart"
