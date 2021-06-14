# syntax=docker/dockerfile-upstream:master-labs
FROM caddy:latest

ENV UPSTREAM=api.notion.com:443
ENV APITOKEN=secret_

COPY <<"EOF" /etc/caddy/Caddyfile
{
	debug
	log {
		level INFO
		format json
		output stderr
	}
}

:{$PORT:80} {
	log {
		level INFO
		format json
		output stdout
	}
	root * /home
	encode * gzip zstd
	reverse_proxy * {env.UPSTREAM} {
		header_up   Host                        "{http.reverse_proxy.upstream.hostport}"
		header_up   Notion-Version              "2021-05-13"
		header_up   Authorization               "Bearer {env.APITOKEN}"
		header_down Access-Control-Allow-Origin "{http.request.header.origin}"
		transport http {
			tls
			#tls_server_name {http.reverse_proxy.upstream.host}
			tls_insecure_skip_verify
		}
	}
}
EOF
