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