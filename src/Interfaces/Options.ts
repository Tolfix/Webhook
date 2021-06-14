export default interface Options 
{
    /**
     * @param endpoint The endpoint for the webserver
     * @default /webhook
     */
    endpoint?: string;

    /**
     * @param secret The secret from github, needs to equal to each other
     */
    secret?: string;
}