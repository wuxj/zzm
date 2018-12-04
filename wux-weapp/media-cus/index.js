Component({
    externalClasses: ['wux-class'],
    options: {
      multipleSlots: true,
    },
    properties: {
        thumb: {
            type: String,
            value: '',
        },
        thumbStyle: {
            type: String,
            value: '',
        },
        align: {
            type: String,
            value: 'center',
        },
    },
})