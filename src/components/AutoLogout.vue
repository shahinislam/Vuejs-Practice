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