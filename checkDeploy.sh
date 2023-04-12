# save stdout and stderr to files
vc deploy >deployment-url.txt 2>error.txt
 
# check the exit code
code=$?
if [ $code -eq 0 ]; then
    # Now you can use the deployment url from stdout for the next step of your workflow
    deploymentUrl=`cat deployment-url.txt`
    echo $deploymentUrl
else
    # Handle the error
    echo "There was an error"
fi
