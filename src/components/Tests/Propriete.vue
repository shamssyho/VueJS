<template>
    <div>
        <h2>Props from child to parent</h2>
        <p> My name is : {{ name }}  </p>
        <p> I am : {{ age }} years old </p>
        <p> {{ bind }}</p>
    </div>
  
</template>

<script>
export default {
    /* On peut mettre entre crochets ou entre accolades ( ce qui nous permet de spécifier le type) */
/*     props : [
        "name",
        "age",
        "bind",
    ]
 */
    props : {
        "name" :{
            String,
            required : true,
            default : "this is the default value"
        },
        "age" : Number,
        "bind" : String,
       /*  "isBind" : Boolean, */
        }
}
</script>

