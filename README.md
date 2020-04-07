# Vue.js Practice

## Coder's Tape Tutorial 14, 15, 16

```
npm install -g @vue/cli
vue create project-name
cd project-name
npm run serve
```
## Vue UI:
```
-> vue ui
```

## Auto Complete

![vue14](https://user-images.githubusercontent.com/33843231/78323073-85e0d200-7592-11ea-83c0-039eb3542358.png)

```vue
<template>
  <div class="flex flex-col items-center">
    <div class="absolute inset-0 z-0" @click="modal = false"></div>
    <h1>Search</h1>
    <input v-model="state" @focus="modal = true" class="bg-teal-200 mt-3 px-4 py-2 z-10" placeholder="Search" type="text" autocomplete="off">
    <div v-if="filteredStates && modal" class="z-10">
        <ul class="w-48 bg-gray-800 text-white">
          <li v-for="filteredState in filteredStates" @click="setState(filteredState)" :key="filteredState" class="py-2 border-b cursor-pointer">{{ filteredState }}</li>
        </ul>
    </div>
  </div>
</template>


<script>


export default {
  name: 'AutoComplete',
  
  data: function () {
    return {
      state: '',
      modal: false,
      states: [
         'Florida', 'Alabama', 'Alaska', 'Texas'
      ],
      filteredStates: [],
    }
  },

  mounted () {
    this.filterStates();
  },

  methods: {
    filterStates () {
      if (this.state.length == 0) {
        this.filteredStates = this.states;
      }

      this.filteredStates = this.states.filter(state => {
        return state.toLowerCase().startsWith(this.state.toLowerCase());
      });
    },

    setState (state) {
      this.state = state;
      this.modal = false;
    }
  },

  watch: {
    state () {
      this.filterStates();
    }
  }
}
</script>

<style>

</style>

```

## Pricing 

![vue15](https://user-images.githubusercontent.com/33843231/78323075-8711ff00-7592-11ea-8671-ac8f30194ff1.png)


```vue
<template>
    <div class="flex justify-center">
        <div class="w-1/2 bg-blue-900 rounded-lg shadow px-6 py-12 flex flex-col items-center">
            <div class="bg-gray-400 rounded-full flex justify-around p-1">
                <button @click="currentFrequency = frequency"
                    v-for="(price, frequency) in plans[0].pricing" :key= "frequency[price]"
                    class="rounded-full text-xs font-bold px-6 py-1 uppercase focus:outline-none"
                   :class="currentFrequency == frequency ? ' bg-blue-600 text-gray-200' : ''"
                    >{{ frequency }}
                </button>
            </div>
            <div class="flex w-full pt-8">
                <div v-for="plan in plans" :key="plan" class="text-white w-1/2">
                    <h1 class="text-2xl font-bold">{{ plan.name }}</h1>
                    <ul class="pt-4">

                        <li v-for="benefit in plan.benefits[currentFrequency]" :key="benefit">{{ benefit }}</li>
                        
                    </ul>
                    <div class="flex justify-center pt-8">
                        <div class="text-4xl font-bold">{{ getPrice(plan.pricing[currentFrequency].price) }}</div>
                        <div class="pl-1 pt-2 text-gray-300">{{ plan.pricing[currentFrequency].label }}</div>
                    </div>
                </div>
            </div>
            <div class="pt-4 text-center text-gray-400 text-sm font-bold">
                <a href="#" @click.prevent="currency = 'usd'">USD</a> |
                <a href="#" @click.prevent="currency = 'eur'">EUR</a> |
                <a href="#" @click.prevent="currency = 'taka'">TAKA</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pricing',

    methods: {
        getPrice(price) {
            return this['currency' + this.currency.toUpperCase()](price);
        },

        currencyUSD(price) {
            return '$' + price;
        },

        currencyEUR(price) {
            return Math.ceil(price * .93) + '€';
        },
        currencyTAKA(price) {
            return Math.ceil(price * 84.67) + '৳';
        },
    },

    data: function () {
        return {
            currentFrequency: 'monthly',
            currency: 'usd',

            plans: [
                {
                    name: 'Starter',
                    benefits: {
                        monthly: [ "Benefit 1", "Benefit 2", "Benefit 3" ],
                        yearly: [ "Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4" ],
                        lifetime: [ "Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4", "Benefit 5" ],
                    },
                    pricing: {
                        monthly: { price: 99, label: '/mo'},
                        yearly: { price: 499, label: '/yr'},
                        lifetime: { price: 1200, label: ''},
                    }
                },
                {
                    name: 'Pro',
                    benefits: {
                        monthly: [ "Benefit 1", "Benefit 2", "Benefit 3" ],
                        yearly: [ "Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4" ],
                        lifetime: [ "Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4", "Benefit 5" ],
                    },
                    pricing: {
                        monthly: { price: 199, label: '/mo'},
                        yearly: { price: 999, label: '/yr'},
                        lifetime: { price: 2200, label: ''},
                    },
                },
            ]
        }
    },

}
</script>

<style>

</style>

```

## Format Form

![vue16](https://user-images.githubusercontent.com/33843231/78323076-88432c00-7592-11ea-89a0-c16a77e5088e.png)

```vue
<template>
    <div>
        <Telephone template="(XXX) XXX-XXXX" />
    </div>
</template>

<script>
import Telephone from './Telephone';
export default {
    components: {
        Telephone,
    }
}
</script>
```

```vue
<template>
    <div class="mt-6">
        <input type="text" :placeholder="template"
               class="w-56 text-2xl bg-gray-300 p-3 rounded-lg focus:outline-none"
               v-model="number" >
    </div>
</template>

<script>
export default {
    props: [
        'template',
    ],

    data: function () {
        return {
            number: '',
            format: '',
            regex: '^',
        }
    },

    mounted () {
        let x = 1;

        this.format = this.template.replace(/X+/g, () => '$' + x++);

        this.template.match(/X+/g).forEach((char) => {

            this.regex += '(\\d{' + char.length + '})?';
            
        });
    },

    watch: {
        number () {
            this.number = this.number.replace(/[^0-9]/g, '')
                .replace(new RegExp(this.regex, 'g'), this.format)  // Dynamic
             // .replace(/^(\d{3})?(\d{3})?(\d{4})?/g, '($1) $2-$3');   
                .substr(0, this.template.length);
        }
    }

}
</script>
```

## Auto Logout

![autologout](https://user-images.githubusercontent.com/33843231/78323070-82e5e180-7592-11ea-9e3a-1c781c1ff17f.png)


```vue
<template>
    <div>
        <div v-if="warningZone" class="text-4xl uppercase text-red-400">Are you still with us?</div>
    </div>
</template>

<script>
export default {

    data: function () {
        return {
            events: ['click', 'mousemove', 'mousedown', 'load', 'keypress'],

            warningTimer: null,
            logoutTimer: null,
            warningZone: false,
        }
    },

    mounted () {
        this.events.forEach(function (event) {
            window.addEventListener(event, this.resetTimer);
        }, this);

        this.setTimers();
    },

    destroyed () {
        this.events.forEach(function (event) {
            window.removeEventListener(event, this.resetTimer);
        }, this);

        this.resetTimer();
    },

    methods: {
        setTimers: function () {
            this.warningTimer = setTimeout(this.warningMessage, 4 * 1000); // 14 min = 14 * 60 *1000
            this.logoutTimer = setTimeout(this.logoutUser, 10 * 1000);  // 15 min = 15 * 60 *1000
            this.warningZone = false;
        },

        warningMessage: function () {
            this.warningZone = true;
        },

        logoutUser: function () {
            alert('You are log out');
        },

        resetTimer: function () {
            clearTimeout(this.warningTimer);
            clearTimeout(this.logoutTimer);

            this.setTimers();
        }
    },

}
</script>
```


