export default {
    name: 'event',
    type: 'document',
    title: 'Event',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Event Name',
        },
        {
            name: 'date',
            type: 'date',
            title: 'Date',
        },
        {
            name: 'place',
            type: 'string',
            title: 'Place'
        },
        {
            name: 'city',
            type: 'string',
            title: 'City'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Event Images',
            of: [{type: 'image'}],
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of Event'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Event Slug',
            options: {
                source: 'name',
            }
        },
        {
            name:'price',
            type:'number',
            title:'Price',
        },
        {
            name: 'price_id',
            title: 'Stripe Price ID',
            type: 'string'
        },
        {
            name: 'genre',
            type: 'reference',
            title: 'Event Genre',
            to: [
                {
                    type: 'genre',
                }
            ]

        }
    ]
}