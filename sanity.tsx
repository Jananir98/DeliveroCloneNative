import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: "lqa1qo4e",
    dataset: "production",
    apiVersion: "2023-03-28",
    useCdn: false,
    token:"skxA8waQq2ZOJP894YIBnVh4SSjrKN53xvU9NoWhmMUzYTgj3atFt2Horfm1VYFi30ueIrdDdToCfHeIIYFn6L3qrQOjBLzNHbY0zPaIvHRoMWrYueGi8fctWvwKk5YwW9TzBjsREG7nOMHKOQUJ64msmB53oJ3yr4ozI9a2kKGaoNmLtf5V"
});

const builder = imageUrlBuilder(client);


export function urlFor(source: any) {
    return builder.image(source)
  }
export default client;
