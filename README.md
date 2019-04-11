# SanStepper

[![Maintainability](https://api.codeclimate.com/v1/badges/3db9af5a76aa62568f0f/maintainability)](https://codeclimate.com/github/reiosantos/ng-san-stepper/maintainability)
[![Build Status](https://travis-ci.com/reiosantos/ng-san-stepper.svg?branch=master)](https://travis-ci.com/reiosantos/ng-san-stepper)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3db9af5a76aa62568f0f/test_coverage)](https://codeclimate.com/github/reiosantos/ng-san-stepper/test_coverage)


Angular Steppers directive for Angular Material

Based on Material Steppers: 
https://material.angular.io/components/stepper/overview#error-state

# USAGE
## Installation in package.json

```bash
npm i -S ng-san-stepper
```

**note**: works with angular >= 2

### Import to app module

```ts
import { SanStepperModule } from 'ng-san-stepper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SanStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Write your html

```html
<san-stepper (stepSubmit)="onSubmit($event)">

	<your-first-step #step></your-first-step>
	<your-second-step #step></your-second-step>
	.....
	<your-last-step #step></your-last-step>

</san-stepper>
```

# Stepper Options


Detailed service operations bellow:


# TODO

- [x] Horizontal steppers
- [x] Linear steppers
- [x] Vertical steppers
- [ ] Non-linear steppers
- [ ] Alternative labels
- [ ] Optional steps
- [ ] Editable steps
- [ ] Stepper feedback
- [ ] Custom Css Classes
- [ ] Create a better demo page with all options.

## Remarks

- Based on:
 - [Angular Material Steppers](https://github.com/marcosmoura/angular-material-steppers)

- Thanks to all ;)
