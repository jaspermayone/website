# Website

## Running Locally
This website uses `yarn` as our package manager, to run locally rename .env.example to .env and put your enviroment variables. Then run these commmands to get it running:
```
$ yarn
$ yarn dev
```

## Photos
The photos features an automatic copyright system to copyright images. To upload a new image follow these instructions:

1. Delete the `/public/photos/output` folder. You MUST do this for it to properly work.
2. Upload your folder
3. Run `yarn process`
4. Your done!