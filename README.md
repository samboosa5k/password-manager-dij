# DIJ Assessment-FE-Developer

> Jasper Verbon
> Date: 12-5-2022

---

> #### Original Assessment Guidelines
> - [Guidelines](https://github.com/deInternetJongens/Assessment-FE-developer)

## Summary

For this assessment the task was to make a basic password manager:

I needed to make a page - ***( 1 )*** - where I could create
a password and link it to a predefined list of clients, and a page - ***( 2 )*** - to get an overview of the passwords
created - with the ability
to view each password again.

No special security or communication with a backend of any kind was required, this was all local.

## Tech Specs

### I used the following configuration

> #### Main
>- React v18
>- Typescript v4.6.4
>- Styled Components v5+


> #### Build
>- Webpack v5
>  - TsConfigPathsPlugin
>  - Hot module loading & fast refresh

> #### Linting & Formatting
>- Prettier v2.6.2
>  - Configured to group/ sort imports

## Bugs
- There is no ability to scroll in the password overview page, so if if the list is too long it will be cut off.
- You can enter spaces into the "new password" field - the regex validation won't allow this to be saved but still.
- There other bugs that I haven't found yet.

## Lacking Features:
- Official testing framework
- Official query to the 'api'