# Nxus Concurrency Boilerplate

This repo contains boilerplate modules for implementing per-process concurrency.

## Requirements

* Heroku/heroku toolchain & cli

## Boilerplate Modules

### Web

This is the basic web worker which can have multiple instances running in Heroku, behind the Heroku Router.

```
> heroku local
```

Then navigate to `http://localhost:5000/web`

### User Triggered Work

This worker runs based on the user doing something on the web worker.


```
> triggered=true heroku local
```

Then navigate to `http://localhost:5000/trigger`

### Scheduled Worker

This worker runs based on a signal sent by the timer process at a set interval. The worker sends a 'completed' signal when done.

The timer tracks the current number of running workers.

```
> scheduled=true heroku local
```

### nxus-worker-queue + nxus-pipeliner

Finally the `with-pipeliner` module has an example of setting up and triggering a worker-queue + pipeliner combination.

```
> pipeliner=true heroku local
```