# Build stage
FROM golang:1.19-rc-alpine3.15

WORKDIR /go/src

COPY ./code/helloworld.go ./
RUN go mod init fullcycle/go
RUN go build -o ../bin/helloworld .


# Runtime
FROM scratch

WORKDIR /app

COPY --from=0 /go/bin/helloworld ./
CMD [ "./helloworld" ]