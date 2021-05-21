---
title: Using FontAwesome in Angular v5+ Applications
author: Houssam Yahiaoui
date: 2021-05-21
hero: ./images/f-a.png
excerpt: How to simply and effectivly use FontAwesome in an Angular v5+ application
---

**TL;DR** In this very opinionated article, we're going to cover how you can install & use FontAwesome within Angular v5+ application the Angular way (aka : component/explicit  wise), so let's have some fun!

**Disclaimer** : In this article i will be asuming that you already have a working Angular v5+ project and your aim would be to simply integrate **FontAwesome**

## 🕵🏼‍♂️ Starting point

If you'v ever had a chance to use FontAwesome before in pas project would might recognise such line of code :

```html
    <i class="far fa-address-book"></i>
```

This is rather the norm, when it comes to using FontAwesome within our project, with requires linking all the FontAwesome materials CSS/Font within our Index.html page, which is rather fine by all standars, until you start working in pretty tight envirement where bundle side and how resource flow is governed by a Code builder that will definitly **Minify** / **Uglify** / **Treee shake** your *application*, where having a *"global"* resource that bundles tons of *"unnecessary"* utulities, icons, css file is simply **out** of the question, so the question now is, what can be done?

## 💻 Setup

Over you favorite terminal, please type the following commands

```bash
    npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons
```

The command above will install the basic *free* bundle of Icons that are mostly used in **FontAwesome** but this is not just it, we will need to download another module which is the *@fortawesome/angular-fontawesome* the tricky part is to install the version that i's most suitable to your application depending on your ***Angular*** application base version.

```bash
    # check the documentation to know which version you best.
# link : https://github.com/FortAwesome/angular-fontawesome
npm install @fortawesome/angular-fontawesome@<version>
```

you might wonder, what are the *FontAwesome* icons types and how i can figure out the one i need, the answer is easy simply head to [here](https://fontawesome.com/icons?d=gallery&p=2) and checkout the left side, you will find a list of 5 selections :
1. Solid
2. Regular
3. Light (pro)
4. Duotone (pro)
5. Brands

Each bundle has it own package ot be downloaded based on your needs, here's the setup command

```bash
    npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-brands-svg-icons
npm install @fortawesome/pro-light-svg-icons
npm install @fortawesome/pro-duotone-svg-icons
```

And of course, you can mix them and have any Icon that you want and integrate it within your application easily & we will explore that in a bit.

## 👨🏻‍💻 Usage

In order to you the *Explicit* FontAwesome integration method, we would need to import it first within out *Module (any module that we might use those icons at)*

**Pro note :** From past projects of mine, i found that it would be very useful if you've a ***Shared Module*** where you have your *Shared Components*, the one that would be used pretty much in each and every feature module, and import/export the module there, it would be benificient to remove extra import cost that you might have from importing individually in each and every feature module of your application.

In your feature module, add the following import on the top of your file :

```js
    import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
```

Now over you **NgComponent** Decorator, in the ***imports*** array add the ***FontAwesomeModule*** as an entry there, so your imports array would look similar to this:

```js
imports: [
    FontAwesomeModule,
   // Other module that you might imported here
]
```

Now, we that is done, we will need to start using our Icons for that we will need to do a couple of thing each time we want to use ***FontAwesome Icons***:

- Import and declare the wanted Icon in your omponent **Typscript file** :


```js
    import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';


@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    faSignInAlt = faSignInAlt;
}
```


- Add the icon to you component **HTML file** as follow :

```html
    <fa-icon [icon]="faSignInAlt"></fa-icon>
```

Please also notice, that since we're using the Excplicity/Component based approuch, we've access to FontAwesome propertis like spin ..etc which can be added as any other Component property binding, eg: the Sping feature can be done like so:

```html
    <fa-icon [icon]="faSignInAlt" [spin]="spingBooleanVariableDeclaredInTSFile"></fa-icon>
```

next, simply declare a variable of type *Boolean* called : **`spingBooleanVariableDeclaredInTSFile`** *(for the lack of good naming 😢)* and give it any value, i.e: **True/False**, you can also do fun things with it, mainly when you have a call to any **HTTP** service call, or attaching it to a **NGRX** operation.

With this, we're done 🥳 !


#### Note:  Hope this was informative and helpful 👋🏼, please free to write to me in case you've any worries and stuck in any of the points mentioed above 🙌.
