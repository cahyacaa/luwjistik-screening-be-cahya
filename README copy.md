![ci workflow](https://github.com/cahyacaa/luwjistik-screening-be-cahya/actions/workflows/ci/badge.svg)

# Luwjistik BE Screening Test
###### This API for manage company order
### Features
- **POST** endpoint to /order that accepts a JSON payload and creates the order
- **GET** endpoint to /order/<order_id> that returns the list of tracking updates on the given order


------------

### How to run this app locally
first create **.env** file based on **.env.example**
- install depedencies
`npm install`

- start app
`npm run start`

- start app on development 
`npm run start:dev`

- running automated test
`npm run test`

------------

### List API
> ###### if you want to run using https use this base url
###### base url : https://luwjistik-be-screening-cahya.herokuapp.com
###### postman documentation [postman luwjistik test](https://documenter.postman.com/preview/9198348-df25e2d4-5df3-44e0-80c9-d78a77ebc18b?environment=&versionTag=latest&apiName=CURRENT&version=latest&documentationLayout=classic-double-column&right-sidebar=303030&top-bar=FFFFFF&highlight=EF5B25http:// "postman luwjistik test")

- POST  `base_url/api/v1/auth/login`

- POST `base_url/api/v1/order`

- GET   `base_url/api/v1/order/:id`

------------


### Dummy data 

- ###### Users
   
            id:'39e91527-faa9-4a54-b2e3-1e4953476c54',
            companyName: 'PT. Test Luwjistik',
            email: 'luwjistik.test@mailinator.com',
            phone:'0819283839',
            address:'Jl. Samosir No.01, Sleman, Yogyakarta',
            password:'$2b$10$Zld./h8BvapjPzbmkhtPouIByKU2Oc14Dn2XQcv7nZzbwSowN6pqW',
            createdAt: new Date(),
            updatedAt: new Date()


- ###### Orders


    {
          id:'39e91527-faa9-4a54-b2e3-1e4953476d12',
          name: 'Handphone Samsun A530E',
          status:'Out for delivery',
          weight:'1 kg',
          recipientName:'Agus Haryo',
          recipientAddress:'Jl. Kamboja, Jakarta Utara',
          recipientPhone:'0811111111',
          orderId:'111SNA011',
          shipperId:'39e91527-faa9-4a54-b2e3-1e4953476c54',
          createdAt: new Date(),
          updatedAt: new Date()
    
      },{
        id:'39e91527-faa9-4a53-b2e3-1e4953476d12',
        name: 'Handphone Samsun A530E',
        status:'Processed at warehouse',
        weight:'1 kg',
        recipientName:'Agus Haryo',
        recipientAddress:'Jl. Kamboja, Jakarta Utara',
        recipientPhone:'0811111111',
        orderId:'111SNA011',
        shipperId:'39e91527-faa9-4a54-b2e3-1e4953476c54',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'39e91527-faa9-4a53-b2e3-1e4953476d12',
        name: 'Handphone Samsun A530E',
        status:'Order picked up',
        weight:'1 kg',
        pickedUpBy:'Agus Haryo',
        recipientName:'Agus Haryo',
        recipientAddress:'Jl. Kamboja, Jakarta Utara',
        recipientPhone:'0811111111',
        orderId:'111SNA011',
        shipperId:'39e91527-faa9-4a54-b2e3-1e4953476c54',
        createdAt: new Date(),
        updatedAt: new Date()
      }



#####  *author : Cahya Nugroho*