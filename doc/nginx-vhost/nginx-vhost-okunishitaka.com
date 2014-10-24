#vhost settings for okunishitaka.com

server {
    listen   80;
    listen   [::]:80;
    server_name okunishitaka.com;

    access_log okunishitaka.com-access.log;
    error_log okunishitaka.com-error.log;

    location ~* ^.+\.(jpg|jpeg|gif|png|ico|css|zip|tgz|gz|rar|bz2|pdf|txt|tar|wav|bmp|rtf|js|flv|swf|html|htm)$ {
        limit_req   zone=one  burst=5;
        root /Users/okuni/WebstormProjects/okunishitaka.com/doc/..public;
    }

    location / {
        limit_req   zone=one  burst=5;
        dav_methods PUT DELETE;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarder-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_pass http://127.0.0.1:3801/;
        proxy_redirect off;
    }

}

