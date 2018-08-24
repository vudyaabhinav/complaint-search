# complaint-search
This is a command line tool that parses consumer complaints from the public records of the Bureau of Consumer Financial Protection

## Getting started
There's a few things you need to get started on to get this to work.

### 1. Installing dependencies
Run `npm i`

### 2. Enabling Command
Change directory to root directory of the repo and run `npm i -g` this enables the command on you local machine

## Usage
Run command `complaints` on terminal to get all complaints. Complaints can also be filtered through the by addition of following options:

``` 
Usage: complaints [options]

  Options:

    -y, --year <year>        filter complaints for year
    -s, --state <state>      filter complaints for state
    -c, --company <company>  filter complaints for company
    -h, --help               output usage information
```

