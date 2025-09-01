
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ctfClaimed
 * 
 */
export type ctfClaimed = $Result.DefaultSelection<Prisma.$ctfClaimedPayload>
/**
 * Model Skills
 * 
 */
export type Skills = $Result.DefaultSelection<Prisma.$SkillsPayload>
/**
 * Model CtfProgress
 * 
 */
export type CtfProgress = $Result.DefaultSelection<Prisma.$CtfProgressPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AuthToken
 * 
 */
export type AuthToken = $Result.DefaultSelection<Prisma.$AuthTokenPayload>
/**
 * Model CTFS
 * 
 */
export type CTFS = $Result.DefaultSelection<Prisma.$CTFSPayload>
/**
 * Model Credentials
 * 
 */
export type Credentials = $Result.DefaultSelection<Prisma.$CredentialsPayload>
/**
 * Model CtfLevels
 * 
 */
export type CtfLevels = $Result.DefaultSelection<Prisma.$CtfLevelsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Difficulty: {
  beginner: 'beginner',
  intermediate: 'intermediate',
  advanced: 'advanced',
  expert: 'expert'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const Category: {
  filEexploration: 'filEexploration',
  crypto: 'crypto',
  binary: 'binary',
  forensics: 'forensics',
  web: 'web',
  network: 'network'
};

export type Category = (typeof Category)[keyof typeof Category]

}

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CtfClaimeds
 * const ctfClaimeds = await prisma.ctfClaimed.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CtfClaimeds
   * const ctfClaimeds = await prisma.ctfClaimed.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.ctfClaimed`: Exposes CRUD operations for the **ctfClaimed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CtfClaimeds
    * const ctfClaimeds = await prisma.ctfClaimed.findMany()
    * ```
    */
  get ctfClaimed(): Prisma.ctfClaimedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skills`: Exposes CRUD operations for the **Skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skills.findMany()
    * ```
    */
  get skills(): Prisma.SkillsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ctfProgress`: Exposes CRUD operations for the **CtfProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CtfProgresses
    * const ctfProgresses = await prisma.ctfProgress.findMany()
    * ```
    */
  get ctfProgress(): Prisma.CtfProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authToken`: Exposes CRUD operations for the **AuthToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthTokens
    * const authTokens = await prisma.authToken.findMany()
    * ```
    */
  get authToken(): Prisma.AuthTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cTFS`: Exposes CRUD operations for the **CTFS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CTFS
    * const cTFS = await prisma.cTFS.findMany()
    * ```
    */
  get cTFS(): Prisma.CTFSDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.credentials`: Exposes CRUD operations for the **Credentials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credentials
    * const credentials = await prisma.credentials.findMany()
    * ```
    */
  get credentials(): Prisma.CredentialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ctfLevels`: Exposes CRUD operations for the **CtfLevels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CtfLevels
    * const ctfLevels = await prisma.ctfLevels.findMany()
    * ```
    */
  get ctfLevels(): Prisma.CtfLevelsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ctfClaimed: 'ctfClaimed',
    Skills: 'Skills',
    CtfProgress: 'CtfProgress',
    User: 'User',
    AuthToken: 'AuthToken',
    CTFS: 'CTFS',
    Credentials: 'Credentials',
    CtfLevels: 'CtfLevels'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "ctfClaimed" | "skills" | "ctfProgress" | "user" | "authToken" | "cTFS" | "credentials" | "ctfLevels"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ctfClaimed: {
        payload: Prisma.$ctfClaimedPayload<ExtArgs>
        fields: Prisma.ctfClaimedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ctfClaimedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ctfClaimedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ctfClaimedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ctfClaimedPayload>
          }
          findFirst: {
            args: Prisma.ctfClaimedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ctfClaimedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ctfClaimedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ctfClaimedPayload>
          }
          findMany: {
            args: Prisma.ctfClaimedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ctfClaimedPayload>[]
          }
          create: {
            args: Prisma.ctfClaimedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ctfClaimedPayload>
          }
          createMany: {
            args: Prisma.ctfClaimedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ctfClaimedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ctfClaimedPayload>[]
          }
          delete: {
            args: Prisma.ctfClaimedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ctfClaimedPayload>
          }
          update: {
            args: Prisma.ctfClaimedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ctfClaimedPayload>
          }
          deleteMany: {
            args: Prisma.ctfClaimedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ctfClaimedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ctfClaimedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ctfClaimedPayload>[]
          }
          upsert: {
            args: Prisma.ctfClaimedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ctfClaimedPayload>
          }
          aggregate: {
            args: Prisma.CtfClaimedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCtfClaimed>
          }
          groupBy: {
            args: Prisma.ctfClaimedGroupByArgs<ExtArgs>
            result: $Utils.Optional<CtfClaimedGroupByOutputType>[]
          }
          count: {
            args: Prisma.ctfClaimedCountArgs<ExtArgs>
            result: $Utils.Optional<CtfClaimedCountAggregateOutputType> | number
          }
        }
      }
      Skills: {
        payload: Prisma.$SkillsPayload<ExtArgs>
        fields: Prisma.SkillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          findFirst: {
            args: Prisma.SkillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          findMany: {
            args: Prisma.SkillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>[]
          }
          create: {
            args: Prisma.SkillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          createMany: {
            args: Prisma.SkillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>[]
          }
          delete: {
            args: Prisma.SkillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          update: {
            args: Prisma.SkillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          deleteMany: {
            args: Prisma.SkillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>[]
          }
          upsert: {
            args: Prisma.SkillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          aggregate: {
            args: Prisma.SkillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkills>
          }
          groupBy: {
            args: Prisma.SkillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillsCountArgs<ExtArgs>
            result: $Utils.Optional<SkillsCountAggregateOutputType> | number
          }
        }
      }
      CtfProgress: {
        payload: Prisma.$CtfProgressPayload<ExtArgs>
        fields: Prisma.CtfProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CtfProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CtfProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfProgressPayload>
          }
          findFirst: {
            args: Prisma.CtfProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CtfProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfProgressPayload>
          }
          findMany: {
            args: Prisma.CtfProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfProgressPayload>[]
          }
          create: {
            args: Prisma.CtfProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfProgressPayload>
          }
          createMany: {
            args: Prisma.CtfProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CtfProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfProgressPayload>[]
          }
          delete: {
            args: Prisma.CtfProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfProgressPayload>
          }
          update: {
            args: Prisma.CtfProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfProgressPayload>
          }
          deleteMany: {
            args: Prisma.CtfProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CtfProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CtfProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfProgressPayload>[]
          }
          upsert: {
            args: Prisma.CtfProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfProgressPayload>
          }
          aggregate: {
            args: Prisma.CtfProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCtfProgress>
          }
          groupBy: {
            args: Prisma.CtfProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<CtfProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.CtfProgressCountArgs<ExtArgs>
            result: $Utils.Optional<CtfProgressCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AuthToken: {
        payload: Prisma.$AuthTokenPayload<ExtArgs>
        fields: Prisma.AuthTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>
          }
          findFirst: {
            args: Prisma.AuthTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>
          }
          findMany: {
            args: Prisma.AuthTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>[]
          }
          create: {
            args: Prisma.AuthTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>
          }
          createMany: {
            args: Prisma.AuthTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>[]
          }
          delete: {
            args: Prisma.AuthTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>
          }
          update: {
            args: Prisma.AuthTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>
          }
          deleteMany: {
            args: Prisma.AuthTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>[]
          }
          upsert: {
            args: Prisma.AuthTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>
          }
          aggregate: {
            args: Prisma.AuthTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthToken>
          }
          groupBy: {
            args: Prisma.AuthTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthTokenCountArgs<ExtArgs>
            result: $Utils.Optional<AuthTokenCountAggregateOutputType> | number
          }
        }
      }
      CTFS: {
        payload: Prisma.$CTFSPayload<ExtArgs>
        fields: Prisma.CTFSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CTFSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTFSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CTFSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTFSPayload>
          }
          findFirst: {
            args: Prisma.CTFSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTFSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CTFSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTFSPayload>
          }
          findMany: {
            args: Prisma.CTFSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTFSPayload>[]
          }
          create: {
            args: Prisma.CTFSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTFSPayload>
          }
          createMany: {
            args: Prisma.CTFSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CTFSCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTFSPayload>[]
          }
          delete: {
            args: Prisma.CTFSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTFSPayload>
          }
          update: {
            args: Prisma.CTFSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTFSPayload>
          }
          deleteMany: {
            args: Prisma.CTFSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CTFSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CTFSUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTFSPayload>[]
          }
          upsert: {
            args: Prisma.CTFSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTFSPayload>
          }
          aggregate: {
            args: Prisma.CTFSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCTFS>
          }
          groupBy: {
            args: Prisma.CTFSGroupByArgs<ExtArgs>
            result: $Utils.Optional<CTFSGroupByOutputType>[]
          }
          count: {
            args: Prisma.CTFSCountArgs<ExtArgs>
            result: $Utils.Optional<CTFSCountAggregateOutputType> | number
          }
        }
      }
      Credentials: {
        payload: Prisma.$CredentialsPayload<ExtArgs>
        fields: Prisma.CredentialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CredentialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CredentialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          findFirst: {
            args: Prisma.CredentialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CredentialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          findMany: {
            args: Prisma.CredentialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>[]
          }
          create: {
            args: Prisma.CredentialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          createMany: {
            args: Prisma.CredentialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CredentialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>[]
          }
          delete: {
            args: Prisma.CredentialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          update: {
            args: Prisma.CredentialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          deleteMany: {
            args: Prisma.CredentialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CredentialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CredentialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>[]
          }
          upsert: {
            args: Prisma.CredentialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          aggregate: {
            args: Prisma.CredentialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredentials>
          }
          groupBy: {
            args: Prisma.CredentialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CredentialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CredentialsCountArgs<ExtArgs>
            result: $Utils.Optional<CredentialsCountAggregateOutputType> | number
          }
        }
      }
      CtfLevels: {
        payload: Prisma.$CtfLevelsPayload<ExtArgs>
        fields: Prisma.CtfLevelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CtfLevelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfLevelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CtfLevelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfLevelsPayload>
          }
          findFirst: {
            args: Prisma.CtfLevelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfLevelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CtfLevelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfLevelsPayload>
          }
          findMany: {
            args: Prisma.CtfLevelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfLevelsPayload>[]
          }
          create: {
            args: Prisma.CtfLevelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfLevelsPayload>
          }
          createMany: {
            args: Prisma.CtfLevelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CtfLevelsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfLevelsPayload>[]
          }
          delete: {
            args: Prisma.CtfLevelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfLevelsPayload>
          }
          update: {
            args: Prisma.CtfLevelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfLevelsPayload>
          }
          deleteMany: {
            args: Prisma.CtfLevelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CtfLevelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CtfLevelsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfLevelsPayload>[]
          }
          upsert: {
            args: Prisma.CtfLevelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfLevelsPayload>
          }
          aggregate: {
            args: Prisma.CtfLevelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCtfLevels>
          }
          groupBy: {
            args: Prisma.CtfLevelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CtfLevelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CtfLevelsCountArgs<ExtArgs>
            result: $Utils.Optional<CtfLevelsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    ctfClaimed?: ctfClaimedOmit
    skills?: SkillsOmit
    ctfProgress?: CtfProgressOmit
    user?: UserOmit
    authToken?: AuthTokenOmit
    cTFS?: CTFSOmit
    credentials?: CredentialsOmit
    ctfLevels?: CtfLevelsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CtfProgressCountOutputType
   */

  export type CtfProgressCountOutputType = {
    ctfClaimeds: number
  }

  export type CtfProgressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ctfClaimeds?: boolean | CtfProgressCountOutputTypeCountCtfClaimedsArgs
  }

  // Custom InputTypes
  /**
   * CtfProgressCountOutputType without action
   */
  export type CtfProgressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfProgressCountOutputType
     */
    select?: CtfProgressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CtfProgressCountOutputType without action
   */
  export type CtfProgressCountOutputTypeCountCtfClaimedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ctfClaimedWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tokens: number
    ctfsProgress: number
    skills: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
    ctfsProgress?: boolean | UserCountOutputTypeCountCtfsProgressArgs
    skills?: boolean | UserCountOutputTypeCountSkillsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCtfsProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CtfProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ctfClaimed
   */

  export type AggregateCtfClaimed = {
    _count: CtfClaimedCountAggregateOutputType | null
    _avg: CtfClaimedAvgAggregateOutputType | null
    _sum: CtfClaimedSumAggregateOutputType | null
    _min: CtfClaimedMinAggregateOutputType | null
    _max: CtfClaimedMaxAggregateOutputType | null
  }

  export type CtfClaimedAvgAggregateOutputType = {
    levelNo: number | null
  }

  export type CtfClaimedSumAggregateOutputType = {
    levelNo: number | null
  }

  export type CtfClaimedMinAggregateOutputType = {
    id: string | null
    ctfProgressId: string | null
    levelNo: number | null
    password: string | null
  }

  export type CtfClaimedMaxAggregateOutputType = {
    id: string | null
    ctfProgressId: string | null
    levelNo: number | null
    password: string | null
  }

  export type CtfClaimedCountAggregateOutputType = {
    id: number
    ctfProgressId: number
    levelNo: number
    password: number
    _all: number
  }


  export type CtfClaimedAvgAggregateInputType = {
    levelNo?: true
  }

  export type CtfClaimedSumAggregateInputType = {
    levelNo?: true
  }

  export type CtfClaimedMinAggregateInputType = {
    id?: true
    ctfProgressId?: true
    levelNo?: true
    password?: true
  }

  export type CtfClaimedMaxAggregateInputType = {
    id?: true
    ctfProgressId?: true
    levelNo?: true
    password?: true
  }

  export type CtfClaimedCountAggregateInputType = {
    id?: true
    ctfProgressId?: true
    levelNo?: true
    password?: true
    _all?: true
  }

  export type CtfClaimedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ctfClaimed to aggregate.
     */
    where?: ctfClaimedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ctfClaimeds to fetch.
     */
    orderBy?: ctfClaimedOrderByWithRelationInput | ctfClaimedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ctfClaimedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ctfClaimeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ctfClaimeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ctfClaimeds
    **/
    _count?: true | CtfClaimedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CtfClaimedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CtfClaimedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CtfClaimedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CtfClaimedMaxAggregateInputType
  }

  export type GetCtfClaimedAggregateType<T extends CtfClaimedAggregateArgs> = {
        [P in keyof T & keyof AggregateCtfClaimed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCtfClaimed[P]>
      : GetScalarType<T[P], AggregateCtfClaimed[P]>
  }




  export type ctfClaimedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ctfClaimedWhereInput
    orderBy?: ctfClaimedOrderByWithAggregationInput | ctfClaimedOrderByWithAggregationInput[]
    by: CtfClaimedScalarFieldEnum[] | CtfClaimedScalarFieldEnum
    having?: ctfClaimedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CtfClaimedCountAggregateInputType | true
    _avg?: CtfClaimedAvgAggregateInputType
    _sum?: CtfClaimedSumAggregateInputType
    _min?: CtfClaimedMinAggregateInputType
    _max?: CtfClaimedMaxAggregateInputType
  }

  export type CtfClaimedGroupByOutputType = {
    id: string
    ctfProgressId: string
    levelNo: number
    password: string
    _count: CtfClaimedCountAggregateOutputType | null
    _avg: CtfClaimedAvgAggregateOutputType | null
    _sum: CtfClaimedSumAggregateOutputType | null
    _min: CtfClaimedMinAggregateOutputType | null
    _max: CtfClaimedMaxAggregateOutputType | null
  }

  type GetCtfClaimedGroupByPayload<T extends ctfClaimedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CtfClaimedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CtfClaimedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CtfClaimedGroupByOutputType[P]>
            : GetScalarType<T[P], CtfClaimedGroupByOutputType[P]>
        }
      >
    >


  export type ctfClaimedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ctfProgressId?: boolean
    levelNo?: boolean
    password?: boolean
    ctfprogress?: boolean | CtfProgressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ctfClaimed"]>

  export type ctfClaimedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ctfProgressId?: boolean
    levelNo?: boolean
    password?: boolean
    ctfprogress?: boolean | CtfProgressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ctfClaimed"]>

  export type ctfClaimedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ctfProgressId?: boolean
    levelNo?: boolean
    password?: boolean
    ctfprogress?: boolean | CtfProgressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ctfClaimed"]>

  export type ctfClaimedSelectScalar = {
    id?: boolean
    ctfProgressId?: boolean
    levelNo?: boolean
    password?: boolean
  }

  export type ctfClaimedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ctfProgressId" | "levelNo" | "password", ExtArgs["result"]["ctfClaimed"]>
  export type ctfClaimedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ctfprogress?: boolean | CtfProgressDefaultArgs<ExtArgs>
  }
  export type ctfClaimedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ctfprogress?: boolean | CtfProgressDefaultArgs<ExtArgs>
  }
  export type ctfClaimedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ctfprogress?: boolean | CtfProgressDefaultArgs<ExtArgs>
  }

  export type $ctfClaimedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ctfClaimed"
    objects: {
      ctfprogress: Prisma.$CtfProgressPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ctfProgressId: string
      levelNo: number
      password: string
    }, ExtArgs["result"]["ctfClaimed"]>
    composites: {}
  }

  type ctfClaimedGetPayload<S extends boolean | null | undefined | ctfClaimedDefaultArgs> = $Result.GetResult<Prisma.$ctfClaimedPayload, S>

  type ctfClaimedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ctfClaimedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CtfClaimedCountAggregateInputType | true
    }

  export interface ctfClaimedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ctfClaimed'], meta: { name: 'ctfClaimed' } }
    /**
     * Find zero or one CtfClaimed that matches the filter.
     * @param {ctfClaimedFindUniqueArgs} args - Arguments to find a CtfClaimed
     * @example
     * // Get one CtfClaimed
     * const ctfClaimed = await prisma.ctfClaimed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ctfClaimedFindUniqueArgs>(args: SelectSubset<T, ctfClaimedFindUniqueArgs<ExtArgs>>): Prisma__ctfClaimedClient<$Result.GetResult<Prisma.$ctfClaimedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CtfClaimed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ctfClaimedFindUniqueOrThrowArgs} args - Arguments to find a CtfClaimed
     * @example
     * // Get one CtfClaimed
     * const ctfClaimed = await prisma.ctfClaimed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ctfClaimedFindUniqueOrThrowArgs>(args: SelectSubset<T, ctfClaimedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ctfClaimedClient<$Result.GetResult<Prisma.$ctfClaimedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CtfClaimed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctfClaimedFindFirstArgs} args - Arguments to find a CtfClaimed
     * @example
     * // Get one CtfClaimed
     * const ctfClaimed = await prisma.ctfClaimed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ctfClaimedFindFirstArgs>(args?: SelectSubset<T, ctfClaimedFindFirstArgs<ExtArgs>>): Prisma__ctfClaimedClient<$Result.GetResult<Prisma.$ctfClaimedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CtfClaimed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctfClaimedFindFirstOrThrowArgs} args - Arguments to find a CtfClaimed
     * @example
     * // Get one CtfClaimed
     * const ctfClaimed = await prisma.ctfClaimed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ctfClaimedFindFirstOrThrowArgs>(args?: SelectSubset<T, ctfClaimedFindFirstOrThrowArgs<ExtArgs>>): Prisma__ctfClaimedClient<$Result.GetResult<Prisma.$ctfClaimedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CtfClaimeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctfClaimedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CtfClaimeds
     * const ctfClaimeds = await prisma.ctfClaimed.findMany()
     * 
     * // Get first 10 CtfClaimeds
     * const ctfClaimeds = await prisma.ctfClaimed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ctfClaimedWithIdOnly = await prisma.ctfClaimed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ctfClaimedFindManyArgs>(args?: SelectSubset<T, ctfClaimedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ctfClaimedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CtfClaimed.
     * @param {ctfClaimedCreateArgs} args - Arguments to create a CtfClaimed.
     * @example
     * // Create one CtfClaimed
     * const CtfClaimed = await prisma.ctfClaimed.create({
     *   data: {
     *     // ... data to create a CtfClaimed
     *   }
     * })
     * 
     */
    create<T extends ctfClaimedCreateArgs>(args: SelectSubset<T, ctfClaimedCreateArgs<ExtArgs>>): Prisma__ctfClaimedClient<$Result.GetResult<Prisma.$ctfClaimedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CtfClaimeds.
     * @param {ctfClaimedCreateManyArgs} args - Arguments to create many CtfClaimeds.
     * @example
     * // Create many CtfClaimeds
     * const ctfClaimed = await prisma.ctfClaimed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ctfClaimedCreateManyArgs>(args?: SelectSubset<T, ctfClaimedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CtfClaimeds and returns the data saved in the database.
     * @param {ctfClaimedCreateManyAndReturnArgs} args - Arguments to create many CtfClaimeds.
     * @example
     * // Create many CtfClaimeds
     * const ctfClaimed = await prisma.ctfClaimed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CtfClaimeds and only return the `id`
     * const ctfClaimedWithIdOnly = await prisma.ctfClaimed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ctfClaimedCreateManyAndReturnArgs>(args?: SelectSubset<T, ctfClaimedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ctfClaimedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CtfClaimed.
     * @param {ctfClaimedDeleteArgs} args - Arguments to delete one CtfClaimed.
     * @example
     * // Delete one CtfClaimed
     * const CtfClaimed = await prisma.ctfClaimed.delete({
     *   where: {
     *     // ... filter to delete one CtfClaimed
     *   }
     * })
     * 
     */
    delete<T extends ctfClaimedDeleteArgs>(args: SelectSubset<T, ctfClaimedDeleteArgs<ExtArgs>>): Prisma__ctfClaimedClient<$Result.GetResult<Prisma.$ctfClaimedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CtfClaimed.
     * @param {ctfClaimedUpdateArgs} args - Arguments to update one CtfClaimed.
     * @example
     * // Update one CtfClaimed
     * const ctfClaimed = await prisma.ctfClaimed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ctfClaimedUpdateArgs>(args: SelectSubset<T, ctfClaimedUpdateArgs<ExtArgs>>): Prisma__ctfClaimedClient<$Result.GetResult<Prisma.$ctfClaimedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CtfClaimeds.
     * @param {ctfClaimedDeleteManyArgs} args - Arguments to filter CtfClaimeds to delete.
     * @example
     * // Delete a few CtfClaimeds
     * const { count } = await prisma.ctfClaimed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ctfClaimedDeleteManyArgs>(args?: SelectSubset<T, ctfClaimedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CtfClaimeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctfClaimedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CtfClaimeds
     * const ctfClaimed = await prisma.ctfClaimed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ctfClaimedUpdateManyArgs>(args: SelectSubset<T, ctfClaimedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CtfClaimeds and returns the data updated in the database.
     * @param {ctfClaimedUpdateManyAndReturnArgs} args - Arguments to update many CtfClaimeds.
     * @example
     * // Update many CtfClaimeds
     * const ctfClaimed = await prisma.ctfClaimed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CtfClaimeds and only return the `id`
     * const ctfClaimedWithIdOnly = await prisma.ctfClaimed.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ctfClaimedUpdateManyAndReturnArgs>(args: SelectSubset<T, ctfClaimedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ctfClaimedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CtfClaimed.
     * @param {ctfClaimedUpsertArgs} args - Arguments to update or create a CtfClaimed.
     * @example
     * // Update or create a CtfClaimed
     * const ctfClaimed = await prisma.ctfClaimed.upsert({
     *   create: {
     *     // ... data to create a CtfClaimed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CtfClaimed we want to update
     *   }
     * })
     */
    upsert<T extends ctfClaimedUpsertArgs>(args: SelectSubset<T, ctfClaimedUpsertArgs<ExtArgs>>): Prisma__ctfClaimedClient<$Result.GetResult<Prisma.$ctfClaimedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CtfClaimeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctfClaimedCountArgs} args - Arguments to filter CtfClaimeds to count.
     * @example
     * // Count the number of CtfClaimeds
     * const count = await prisma.ctfClaimed.count({
     *   where: {
     *     // ... the filter for the CtfClaimeds we want to count
     *   }
     * })
    **/
    count<T extends ctfClaimedCountArgs>(
      args?: Subset<T, ctfClaimedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CtfClaimedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CtfClaimed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfClaimedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CtfClaimedAggregateArgs>(args: Subset<T, CtfClaimedAggregateArgs>): Prisma.PrismaPromise<GetCtfClaimedAggregateType<T>>

    /**
     * Group by CtfClaimed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ctfClaimedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ctfClaimedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ctfClaimedGroupByArgs['orderBy'] }
        : { orderBy?: ctfClaimedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ctfClaimedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCtfClaimedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ctfClaimed model
   */
  readonly fields: ctfClaimedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ctfClaimed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ctfClaimedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ctfprogress<T extends CtfProgressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CtfProgressDefaultArgs<ExtArgs>>): Prisma__CtfProgressClient<$Result.GetResult<Prisma.$CtfProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ctfClaimed model
   */
  interface ctfClaimedFieldRefs {
    readonly id: FieldRef<"ctfClaimed", 'String'>
    readonly ctfProgressId: FieldRef<"ctfClaimed", 'String'>
    readonly levelNo: FieldRef<"ctfClaimed", 'Int'>
    readonly password: FieldRef<"ctfClaimed", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ctfClaimed findUnique
   */
  export type ctfClaimedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctfClaimed
     */
    select?: ctfClaimedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ctfClaimed
     */
    omit?: ctfClaimedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ctfClaimedInclude<ExtArgs> | null
    /**
     * Filter, which ctfClaimed to fetch.
     */
    where: ctfClaimedWhereUniqueInput
  }

  /**
   * ctfClaimed findUniqueOrThrow
   */
  export type ctfClaimedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctfClaimed
     */
    select?: ctfClaimedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ctfClaimed
     */
    omit?: ctfClaimedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ctfClaimedInclude<ExtArgs> | null
    /**
     * Filter, which ctfClaimed to fetch.
     */
    where: ctfClaimedWhereUniqueInput
  }

  /**
   * ctfClaimed findFirst
   */
  export type ctfClaimedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctfClaimed
     */
    select?: ctfClaimedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ctfClaimed
     */
    omit?: ctfClaimedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ctfClaimedInclude<ExtArgs> | null
    /**
     * Filter, which ctfClaimed to fetch.
     */
    where?: ctfClaimedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ctfClaimeds to fetch.
     */
    orderBy?: ctfClaimedOrderByWithRelationInput | ctfClaimedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ctfClaimeds.
     */
    cursor?: ctfClaimedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ctfClaimeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ctfClaimeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ctfClaimeds.
     */
    distinct?: CtfClaimedScalarFieldEnum | CtfClaimedScalarFieldEnum[]
  }

  /**
   * ctfClaimed findFirstOrThrow
   */
  export type ctfClaimedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctfClaimed
     */
    select?: ctfClaimedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ctfClaimed
     */
    omit?: ctfClaimedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ctfClaimedInclude<ExtArgs> | null
    /**
     * Filter, which ctfClaimed to fetch.
     */
    where?: ctfClaimedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ctfClaimeds to fetch.
     */
    orderBy?: ctfClaimedOrderByWithRelationInput | ctfClaimedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ctfClaimeds.
     */
    cursor?: ctfClaimedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ctfClaimeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ctfClaimeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ctfClaimeds.
     */
    distinct?: CtfClaimedScalarFieldEnum | CtfClaimedScalarFieldEnum[]
  }

  /**
   * ctfClaimed findMany
   */
  export type ctfClaimedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctfClaimed
     */
    select?: ctfClaimedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ctfClaimed
     */
    omit?: ctfClaimedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ctfClaimedInclude<ExtArgs> | null
    /**
     * Filter, which ctfClaimeds to fetch.
     */
    where?: ctfClaimedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ctfClaimeds to fetch.
     */
    orderBy?: ctfClaimedOrderByWithRelationInput | ctfClaimedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ctfClaimeds.
     */
    cursor?: ctfClaimedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ctfClaimeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ctfClaimeds.
     */
    skip?: number
    distinct?: CtfClaimedScalarFieldEnum | CtfClaimedScalarFieldEnum[]
  }

  /**
   * ctfClaimed create
   */
  export type ctfClaimedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctfClaimed
     */
    select?: ctfClaimedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ctfClaimed
     */
    omit?: ctfClaimedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ctfClaimedInclude<ExtArgs> | null
    /**
     * The data needed to create a ctfClaimed.
     */
    data: XOR<ctfClaimedCreateInput, ctfClaimedUncheckedCreateInput>
  }

  /**
   * ctfClaimed createMany
   */
  export type ctfClaimedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ctfClaimeds.
     */
    data: ctfClaimedCreateManyInput | ctfClaimedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ctfClaimed createManyAndReturn
   */
  export type ctfClaimedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctfClaimed
     */
    select?: ctfClaimedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ctfClaimed
     */
    omit?: ctfClaimedOmit<ExtArgs> | null
    /**
     * The data used to create many ctfClaimeds.
     */
    data: ctfClaimedCreateManyInput | ctfClaimedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ctfClaimedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ctfClaimed update
   */
  export type ctfClaimedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctfClaimed
     */
    select?: ctfClaimedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ctfClaimed
     */
    omit?: ctfClaimedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ctfClaimedInclude<ExtArgs> | null
    /**
     * The data needed to update a ctfClaimed.
     */
    data: XOR<ctfClaimedUpdateInput, ctfClaimedUncheckedUpdateInput>
    /**
     * Choose, which ctfClaimed to update.
     */
    where: ctfClaimedWhereUniqueInput
  }

  /**
   * ctfClaimed updateMany
   */
  export type ctfClaimedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ctfClaimeds.
     */
    data: XOR<ctfClaimedUpdateManyMutationInput, ctfClaimedUncheckedUpdateManyInput>
    /**
     * Filter which ctfClaimeds to update
     */
    where?: ctfClaimedWhereInput
    /**
     * Limit how many ctfClaimeds to update.
     */
    limit?: number
  }

  /**
   * ctfClaimed updateManyAndReturn
   */
  export type ctfClaimedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctfClaimed
     */
    select?: ctfClaimedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ctfClaimed
     */
    omit?: ctfClaimedOmit<ExtArgs> | null
    /**
     * The data used to update ctfClaimeds.
     */
    data: XOR<ctfClaimedUpdateManyMutationInput, ctfClaimedUncheckedUpdateManyInput>
    /**
     * Filter which ctfClaimeds to update
     */
    where?: ctfClaimedWhereInput
    /**
     * Limit how many ctfClaimeds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ctfClaimedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ctfClaimed upsert
   */
  export type ctfClaimedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctfClaimed
     */
    select?: ctfClaimedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ctfClaimed
     */
    omit?: ctfClaimedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ctfClaimedInclude<ExtArgs> | null
    /**
     * The filter to search for the ctfClaimed to update in case it exists.
     */
    where: ctfClaimedWhereUniqueInput
    /**
     * In case the ctfClaimed found by the `where` argument doesn't exist, create a new ctfClaimed with this data.
     */
    create: XOR<ctfClaimedCreateInput, ctfClaimedUncheckedCreateInput>
    /**
     * In case the ctfClaimed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ctfClaimedUpdateInput, ctfClaimedUncheckedUpdateInput>
  }

  /**
   * ctfClaimed delete
   */
  export type ctfClaimedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctfClaimed
     */
    select?: ctfClaimedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ctfClaimed
     */
    omit?: ctfClaimedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ctfClaimedInclude<ExtArgs> | null
    /**
     * Filter which ctfClaimed to delete.
     */
    where: ctfClaimedWhereUniqueInput
  }

  /**
   * ctfClaimed deleteMany
   */
  export type ctfClaimedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ctfClaimeds to delete
     */
    where?: ctfClaimedWhereInput
    /**
     * Limit how many ctfClaimeds to delete.
     */
    limit?: number
  }

  /**
   * ctfClaimed without action
   */
  export type ctfClaimedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctfClaimed
     */
    select?: ctfClaimedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ctfClaimed
     */
    omit?: ctfClaimedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ctfClaimedInclude<ExtArgs> | null
  }


  /**
   * Model Skills
   */

  export type AggregateSkills = {
    _count: SkillsCountAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  export type SkillsMinAggregateOutputType = {
    id: string | null
    category: $Enums.Category | null
    uniqueId: string | null
    username: string | null
  }

  export type SkillsMaxAggregateOutputType = {
    id: string | null
    category: $Enums.Category | null
    uniqueId: string | null
    username: string | null
  }

  export type SkillsCountAggregateOutputType = {
    id: number
    category: number
    uniqueId: number
    username: number
    _all: number
  }


  export type SkillsMinAggregateInputType = {
    id?: true
    category?: true
    uniqueId?: true
    username?: true
  }

  export type SkillsMaxAggregateInputType = {
    id?: true
    category?: true
    uniqueId?: true
    username?: true
  }

  export type SkillsCountAggregateInputType = {
    id?: true
    category?: true
    uniqueId?: true
    username?: true
    _all?: true
  }

  export type SkillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to aggregate.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillsMaxAggregateInputType
  }

  export type GetSkillsAggregateType<T extends SkillsAggregateArgs> = {
        [P in keyof T & keyof AggregateSkills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkills[P]>
      : GetScalarType<T[P], AggregateSkills[P]>
  }




  export type SkillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillsWhereInput
    orderBy?: SkillsOrderByWithAggregationInput | SkillsOrderByWithAggregationInput[]
    by: SkillsScalarFieldEnum[] | SkillsScalarFieldEnum
    having?: SkillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillsCountAggregateInputType | true
    _min?: SkillsMinAggregateInputType
    _max?: SkillsMaxAggregateInputType
  }

  export type SkillsGroupByOutputType = {
    id: string
    category: $Enums.Category
    uniqueId: string
    username: string
    _count: SkillsCountAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  type GetSkillsGroupByPayload<T extends SkillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillsGroupByOutputType[P]>
            : GetScalarType<T[P], SkillsGroupByOutputType[P]>
        }
      >
    >


  export type SkillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    uniqueId?: boolean
    username?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type SkillsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    uniqueId?: boolean
    username?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type SkillsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    uniqueId?: boolean
    username?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type SkillsSelectScalar = {
    id?: boolean
    category?: boolean
    uniqueId?: boolean
    username?: boolean
  }

  export type SkillsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "uniqueId" | "username", ExtArgs["result"]["skills"]>
  export type SkillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SkillsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SkillsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SkillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skills"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: $Enums.Category
      uniqueId: string
      username: string
    }, ExtArgs["result"]["skills"]>
    composites: {}
  }

  type SkillsGetPayload<S extends boolean | null | undefined | SkillsDefaultArgs> = $Result.GetResult<Prisma.$SkillsPayload, S>

  type SkillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillsCountAggregateInputType | true
    }

  export interface SkillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skills'], meta: { name: 'Skills' } }
    /**
     * Find zero or one Skills that matches the filter.
     * @param {SkillsFindUniqueArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillsFindUniqueArgs>(args: SelectSubset<T, SkillsFindUniqueArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skills that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillsFindUniqueOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillsFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindFirstArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillsFindFirstArgs>(args?: SelectSubset<T, SkillsFindFirstArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindFirstOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillsFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skills.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillsWithIdOnly = await prisma.skills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillsFindManyArgs>(args?: SelectSubset<T, SkillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skills.
     * @param {SkillsCreateArgs} args - Arguments to create a Skills.
     * @example
     * // Create one Skills
     * const Skills = await prisma.skills.create({
     *   data: {
     *     // ... data to create a Skills
     *   }
     * })
     * 
     */
    create<T extends SkillsCreateArgs>(args: SelectSubset<T, SkillsCreateArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillsCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skills = await prisma.skills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillsCreateManyArgs>(args?: SelectSubset<T, SkillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillsCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skills = await prisma.skills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillsWithIdOnly = await prisma.skills.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillsCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skills.
     * @param {SkillsDeleteArgs} args - Arguments to delete one Skills.
     * @example
     * // Delete one Skills
     * const Skills = await prisma.skills.delete({
     *   where: {
     *     // ... filter to delete one Skills
     *   }
     * })
     * 
     */
    delete<T extends SkillsDeleteArgs>(args: SelectSubset<T, SkillsDeleteArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skills.
     * @param {SkillsUpdateArgs} args - Arguments to update one Skills.
     * @example
     * // Update one Skills
     * const skills = await prisma.skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillsUpdateArgs>(args: SelectSubset<T, SkillsUpdateArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillsDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillsDeleteManyArgs>(args?: SelectSubset<T, SkillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillsUpdateManyArgs>(args: SelectSubset<T, SkillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillsUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillsWithIdOnly = await prisma.skills.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillsUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skills.
     * @param {SkillsUpsertArgs} args - Arguments to update or create a Skills.
     * @example
     * // Update or create a Skills
     * const skills = await prisma.skills.upsert({
     *   create: {
     *     // ... data to create a Skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skills we want to update
     *   }
     * })
     */
    upsert<T extends SkillsUpsertArgs>(args: SelectSubset<T, SkillsUpsertArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skills.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillsCountArgs>(
      args?: Subset<T, SkillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillsAggregateArgs>(args: Subset<T, SkillsAggregateArgs>): Prisma.PrismaPromise<GetSkillsAggregateType<T>>

    /**
     * Group by Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillsGroupByArgs['orderBy'] }
        : { orderBy?: SkillsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skills model
   */
  readonly fields: SkillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skills model
   */
  interface SkillsFieldRefs {
    readonly id: FieldRef<"Skills", 'String'>
    readonly category: FieldRef<"Skills", 'Category'>
    readonly uniqueId: FieldRef<"Skills", 'String'>
    readonly username: FieldRef<"Skills", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skills findUnique
   */
  export type SkillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills findUniqueOrThrow
   */
  export type SkillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills findFirst
   */
  export type SkillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * Skills findFirstOrThrow
   */
  export type SkillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * Skills findMany
   */
  export type SkillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * Skills create
   */
  export type SkillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Skills.
     */
    data: XOR<SkillsCreateInput, SkillsUncheckedCreateInput>
  }

  /**
   * Skills createMany
   */
  export type SkillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillsCreateManyInput | SkillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skills createManyAndReturn
   */
  export type SkillsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillsCreateManyInput | SkillsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skills update
   */
  export type SkillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Skills.
     */
    data: XOR<SkillsUpdateInput, SkillsUncheckedUpdateInput>
    /**
     * Choose, which Skills to update.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills updateMany
   */
  export type SkillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillsUpdateManyMutationInput, SkillsUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillsWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skills updateManyAndReturn
   */
  export type SkillsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillsUpdateManyMutationInput, SkillsUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillsWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skills upsert
   */
  export type SkillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Skills to update in case it exists.
     */
    where: SkillsWhereUniqueInput
    /**
     * In case the Skills found by the `where` argument doesn't exist, create a new Skills with this data.
     */
    create: XOR<SkillsCreateInput, SkillsUncheckedCreateInput>
    /**
     * In case the Skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillsUpdateInput, SkillsUncheckedUpdateInput>
  }

  /**
   * Skills delete
   */
  export type SkillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter which Skills to delete.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills deleteMany
   */
  export type SkillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillsWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skills without action
   */
  export type SkillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
  }


  /**
   * Model CtfProgress
   */

  export type AggregateCtfProgress = {
    _count: CtfProgressCountAggregateOutputType | null
    _min: CtfProgressMinAggregateOutputType | null
    _max: CtfProgressMaxAggregateOutputType | null
  }

  export type CtfProgressMinAggregateOutputType = {
    id: string | null
    ctfName: string | null
    username: string | null
  }

  export type CtfProgressMaxAggregateOutputType = {
    id: string | null
    ctfName: string | null
    username: string | null
  }

  export type CtfProgressCountAggregateOutputType = {
    id: number
    ctfName: number
    username: number
    _all: number
  }


  export type CtfProgressMinAggregateInputType = {
    id?: true
    ctfName?: true
    username?: true
  }

  export type CtfProgressMaxAggregateInputType = {
    id?: true
    ctfName?: true
    username?: true
  }

  export type CtfProgressCountAggregateInputType = {
    id?: true
    ctfName?: true
    username?: true
    _all?: true
  }

  export type CtfProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CtfProgress to aggregate.
     */
    where?: CtfProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CtfProgresses to fetch.
     */
    orderBy?: CtfProgressOrderByWithRelationInput | CtfProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CtfProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CtfProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CtfProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CtfProgresses
    **/
    _count?: true | CtfProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CtfProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CtfProgressMaxAggregateInputType
  }

  export type GetCtfProgressAggregateType<T extends CtfProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateCtfProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCtfProgress[P]>
      : GetScalarType<T[P], AggregateCtfProgress[P]>
  }




  export type CtfProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CtfProgressWhereInput
    orderBy?: CtfProgressOrderByWithAggregationInput | CtfProgressOrderByWithAggregationInput[]
    by: CtfProgressScalarFieldEnum[] | CtfProgressScalarFieldEnum
    having?: CtfProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CtfProgressCountAggregateInputType | true
    _min?: CtfProgressMinAggregateInputType
    _max?: CtfProgressMaxAggregateInputType
  }

  export type CtfProgressGroupByOutputType = {
    id: string
    ctfName: string
    username: string
    _count: CtfProgressCountAggregateOutputType | null
    _min: CtfProgressMinAggregateOutputType | null
    _max: CtfProgressMaxAggregateOutputType | null
  }

  type GetCtfProgressGroupByPayload<T extends CtfProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CtfProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CtfProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CtfProgressGroupByOutputType[P]>
            : GetScalarType<T[P], CtfProgressGroupByOutputType[P]>
        }
      >
    >


  export type CtfProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ctfName?: boolean
    username?: boolean
    ctfClaimeds?: boolean | CtfProgress$ctfClaimedsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CtfProgressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ctfProgress"]>

  export type CtfProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ctfName?: boolean
    username?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ctfProgress"]>

  export type CtfProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ctfName?: boolean
    username?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ctfProgress"]>

  export type CtfProgressSelectScalar = {
    id?: boolean
    ctfName?: boolean
    username?: boolean
  }

  export type CtfProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ctfName" | "username", ExtArgs["result"]["ctfProgress"]>
  export type CtfProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ctfClaimeds?: boolean | CtfProgress$ctfClaimedsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CtfProgressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CtfProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CtfProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CtfProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CtfProgress"
    objects: {
      ctfClaimeds: Prisma.$ctfClaimedPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ctfName: string
      username: string
    }, ExtArgs["result"]["ctfProgress"]>
    composites: {}
  }

  type CtfProgressGetPayload<S extends boolean | null | undefined | CtfProgressDefaultArgs> = $Result.GetResult<Prisma.$CtfProgressPayload, S>

  type CtfProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CtfProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CtfProgressCountAggregateInputType | true
    }

  export interface CtfProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CtfProgress'], meta: { name: 'CtfProgress' } }
    /**
     * Find zero or one CtfProgress that matches the filter.
     * @param {CtfProgressFindUniqueArgs} args - Arguments to find a CtfProgress
     * @example
     * // Get one CtfProgress
     * const ctfProgress = await prisma.ctfProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CtfProgressFindUniqueArgs>(args: SelectSubset<T, CtfProgressFindUniqueArgs<ExtArgs>>): Prisma__CtfProgressClient<$Result.GetResult<Prisma.$CtfProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CtfProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CtfProgressFindUniqueOrThrowArgs} args - Arguments to find a CtfProgress
     * @example
     * // Get one CtfProgress
     * const ctfProgress = await prisma.ctfProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CtfProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, CtfProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CtfProgressClient<$Result.GetResult<Prisma.$CtfProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CtfProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfProgressFindFirstArgs} args - Arguments to find a CtfProgress
     * @example
     * // Get one CtfProgress
     * const ctfProgress = await prisma.ctfProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CtfProgressFindFirstArgs>(args?: SelectSubset<T, CtfProgressFindFirstArgs<ExtArgs>>): Prisma__CtfProgressClient<$Result.GetResult<Prisma.$CtfProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CtfProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfProgressFindFirstOrThrowArgs} args - Arguments to find a CtfProgress
     * @example
     * // Get one CtfProgress
     * const ctfProgress = await prisma.ctfProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CtfProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, CtfProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__CtfProgressClient<$Result.GetResult<Prisma.$CtfProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CtfProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CtfProgresses
     * const ctfProgresses = await prisma.ctfProgress.findMany()
     * 
     * // Get first 10 CtfProgresses
     * const ctfProgresses = await prisma.ctfProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ctfProgressWithIdOnly = await prisma.ctfProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CtfProgressFindManyArgs>(args?: SelectSubset<T, CtfProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CtfProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CtfProgress.
     * @param {CtfProgressCreateArgs} args - Arguments to create a CtfProgress.
     * @example
     * // Create one CtfProgress
     * const CtfProgress = await prisma.ctfProgress.create({
     *   data: {
     *     // ... data to create a CtfProgress
     *   }
     * })
     * 
     */
    create<T extends CtfProgressCreateArgs>(args: SelectSubset<T, CtfProgressCreateArgs<ExtArgs>>): Prisma__CtfProgressClient<$Result.GetResult<Prisma.$CtfProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CtfProgresses.
     * @param {CtfProgressCreateManyArgs} args - Arguments to create many CtfProgresses.
     * @example
     * // Create many CtfProgresses
     * const ctfProgress = await prisma.ctfProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CtfProgressCreateManyArgs>(args?: SelectSubset<T, CtfProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CtfProgresses and returns the data saved in the database.
     * @param {CtfProgressCreateManyAndReturnArgs} args - Arguments to create many CtfProgresses.
     * @example
     * // Create many CtfProgresses
     * const ctfProgress = await prisma.ctfProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CtfProgresses and only return the `id`
     * const ctfProgressWithIdOnly = await prisma.ctfProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CtfProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, CtfProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CtfProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CtfProgress.
     * @param {CtfProgressDeleteArgs} args - Arguments to delete one CtfProgress.
     * @example
     * // Delete one CtfProgress
     * const CtfProgress = await prisma.ctfProgress.delete({
     *   where: {
     *     // ... filter to delete one CtfProgress
     *   }
     * })
     * 
     */
    delete<T extends CtfProgressDeleteArgs>(args: SelectSubset<T, CtfProgressDeleteArgs<ExtArgs>>): Prisma__CtfProgressClient<$Result.GetResult<Prisma.$CtfProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CtfProgress.
     * @param {CtfProgressUpdateArgs} args - Arguments to update one CtfProgress.
     * @example
     * // Update one CtfProgress
     * const ctfProgress = await prisma.ctfProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CtfProgressUpdateArgs>(args: SelectSubset<T, CtfProgressUpdateArgs<ExtArgs>>): Prisma__CtfProgressClient<$Result.GetResult<Prisma.$CtfProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CtfProgresses.
     * @param {CtfProgressDeleteManyArgs} args - Arguments to filter CtfProgresses to delete.
     * @example
     * // Delete a few CtfProgresses
     * const { count } = await prisma.ctfProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CtfProgressDeleteManyArgs>(args?: SelectSubset<T, CtfProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CtfProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CtfProgresses
     * const ctfProgress = await prisma.ctfProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CtfProgressUpdateManyArgs>(args: SelectSubset<T, CtfProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CtfProgresses and returns the data updated in the database.
     * @param {CtfProgressUpdateManyAndReturnArgs} args - Arguments to update many CtfProgresses.
     * @example
     * // Update many CtfProgresses
     * const ctfProgress = await prisma.ctfProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CtfProgresses and only return the `id`
     * const ctfProgressWithIdOnly = await prisma.ctfProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CtfProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, CtfProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CtfProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CtfProgress.
     * @param {CtfProgressUpsertArgs} args - Arguments to update or create a CtfProgress.
     * @example
     * // Update or create a CtfProgress
     * const ctfProgress = await prisma.ctfProgress.upsert({
     *   create: {
     *     // ... data to create a CtfProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CtfProgress we want to update
     *   }
     * })
     */
    upsert<T extends CtfProgressUpsertArgs>(args: SelectSubset<T, CtfProgressUpsertArgs<ExtArgs>>): Prisma__CtfProgressClient<$Result.GetResult<Prisma.$CtfProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CtfProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfProgressCountArgs} args - Arguments to filter CtfProgresses to count.
     * @example
     * // Count the number of CtfProgresses
     * const count = await prisma.ctfProgress.count({
     *   where: {
     *     // ... the filter for the CtfProgresses we want to count
     *   }
     * })
    **/
    count<T extends CtfProgressCountArgs>(
      args?: Subset<T, CtfProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CtfProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CtfProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CtfProgressAggregateArgs>(args: Subset<T, CtfProgressAggregateArgs>): Prisma.PrismaPromise<GetCtfProgressAggregateType<T>>

    /**
     * Group by CtfProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CtfProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CtfProgressGroupByArgs['orderBy'] }
        : { orderBy?: CtfProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CtfProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCtfProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CtfProgress model
   */
  readonly fields: CtfProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CtfProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CtfProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ctfClaimeds<T extends CtfProgress$ctfClaimedsArgs<ExtArgs> = {}>(args?: Subset<T, CtfProgress$ctfClaimedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ctfClaimedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CtfProgress model
   */
  interface CtfProgressFieldRefs {
    readonly id: FieldRef<"CtfProgress", 'String'>
    readonly ctfName: FieldRef<"CtfProgress", 'String'>
    readonly username: FieldRef<"CtfProgress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CtfProgress findUnique
   */
  export type CtfProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfProgress
     */
    select?: CtfProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfProgress
     */
    omit?: CtfProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfProgressInclude<ExtArgs> | null
    /**
     * Filter, which CtfProgress to fetch.
     */
    where: CtfProgressWhereUniqueInput
  }

  /**
   * CtfProgress findUniqueOrThrow
   */
  export type CtfProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfProgress
     */
    select?: CtfProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfProgress
     */
    omit?: CtfProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfProgressInclude<ExtArgs> | null
    /**
     * Filter, which CtfProgress to fetch.
     */
    where: CtfProgressWhereUniqueInput
  }

  /**
   * CtfProgress findFirst
   */
  export type CtfProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfProgress
     */
    select?: CtfProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfProgress
     */
    omit?: CtfProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfProgressInclude<ExtArgs> | null
    /**
     * Filter, which CtfProgress to fetch.
     */
    where?: CtfProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CtfProgresses to fetch.
     */
    orderBy?: CtfProgressOrderByWithRelationInput | CtfProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CtfProgresses.
     */
    cursor?: CtfProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CtfProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CtfProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CtfProgresses.
     */
    distinct?: CtfProgressScalarFieldEnum | CtfProgressScalarFieldEnum[]
  }

  /**
   * CtfProgress findFirstOrThrow
   */
  export type CtfProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfProgress
     */
    select?: CtfProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfProgress
     */
    omit?: CtfProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfProgressInclude<ExtArgs> | null
    /**
     * Filter, which CtfProgress to fetch.
     */
    where?: CtfProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CtfProgresses to fetch.
     */
    orderBy?: CtfProgressOrderByWithRelationInput | CtfProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CtfProgresses.
     */
    cursor?: CtfProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CtfProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CtfProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CtfProgresses.
     */
    distinct?: CtfProgressScalarFieldEnum | CtfProgressScalarFieldEnum[]
  }

  /**
   * CtfProgress findMany
   */
  export type CtfProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfProgress
     */
    select?: CtfProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfProgress
     */
    omit?: CtfProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfProgressInclude<ExtArgs> | null
    /**
     * Filter, which CtfProgresses to fetch.
     */
    where?: CtfProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CtfProgresses to fetch.
     */
    orderBy?: CtfProgressOrderByWithRelationInput | CtfProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CtfProgresses.
     */
    cursor?: CtfProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CtfProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CtfProgresses.
     */
    skip?: number
    distinct?: CtfProgressScalarFieldEnum | CtfProgressScalarFieldEnum[]
  }

  /**
   * CtfProgress create
   */
  export type CtfProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfProgress
     */
    select?: CtfProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfProgress
     */
    omit?: CtfProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a CtfProgress.
     */
    data: XOR<CtfProgressCreateInput, CtfProgressUncheckedCreateInput>
  }

  /**
   * CtfProgress createMany
   */
  export type CtfProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CtfProgresses.
     */
    data: CtfProgressCreateManyInput | CtfProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CtfProgress createManyAndReturn
   */
  export type CtfProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfProgress
     */
    select?: CtfProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CtfProgress
     */
    omit?: CtfProgressOmit<ExtArgs> | null
    /**
     * The data used to create many CtfProgresses.
     */
    data: CtfProgressCreateManyInput | CtfProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CtfProgress update
   */
  export type CtfProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfProgress
     */
    select?: CtfProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfProgress
     */
    omit?: CtfProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a CtfProgress.
     */
    data: XOR<CtfProgressUpdateInput, CtfProgressUncheckedUpdateInput>
    /**
     * Choose, which CtfProgress to update.
     */
    where: CtfProgressWhereUniqueInput
  }

  /**
   * CtfProgress updateMany
   */
  export type CtfProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CtfProgresses.
     */
    data: XOR<CtfProgressUpdateManyMutationInput, CtfProgressUncheckedUpdateManyInput>
    /**
     * Filter which CtfProgresses to update
     */
    where?: CtfProgressWhereInput
    /**
     * Limit how many CtfProgresses to update.
     */
    limit?: number
  }

  /**
   * CtfProgress updateManyAndReturn
   */
  export type CtfProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfProgress
     */
    select?: CtfProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CtfProgress
     */
    omit?: CtfProgressOmit<ExtArgs> | null
    /**
     * The data used to update CtfProgresses.
     */
    data: XOR<CtfProgressUpdateManyMutationInput, CtfProgressUncheckedUpdateManyInput>
    /**
     * Filter which CtfProgresses to update
     */
    where?: CtfProgressWhereInput
    /**
     * Limit how many CtfProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CtfProgress upsert
   */
  export type CtfProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfProgress
     */
    select?: CtfProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfProgress
     */
    omit?: CtfProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the CtfProgress to update in case it exists.
     */
    where: CtfProgressWhereUniqueInput
    /**
     * In case the CtfProgress found by the `where` argument doesn't exist, create a new CtfProgress with this data.
     */
    create: XOR<CtfProgressCreateInput, CtfProgressUncheckedCreateInput>
    /**
     * In case the CtfProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CtfProgressUpdateInput, CtfProgressUncheckedUpdateInput>
  }

  /**
   * CtfProgress delete
   */
  export type CtfProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfProgress
     */
    select?: CtfProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfProgress
     */
    omit?: CtfProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfProgressInclude<ExtArgs> | null
    /**
     * Filter which CtfProgress to delete.
     */
    where: CtfProgressWhereUniqueInput
  }

  /**
   * CtfProgress deleteMany
   */
  export type CtfProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CtfProgresses to delete
     */
    where?: CtfProgressWhereInput
    /**
     * Limit how many CtfProgresses to delete.
     */
    limit?: number
  }

  /**
   * CtfProgress.ctfClaimeds
   */
  export type CtfProgress$ctfClaimedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ctfClaimed
     */
    select?: ctfClaimedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ctfClaimed
     */
    omit?: ctfClaimedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ctfClaimedInclude<ExtArgs> | null
    where?: ctfClaimedWhereInput
    orderBy?: ctfClaimedOrderByWithRelationInput | ctfClaimedOrderByWithRelationInput[]
    cursor?: ctfClaimedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CtfClaimedScalarFieldEnum | CtfClaimedScalarFieldEnum[]
  }

  /**
   * CtfProgress without action
   */
  export type CtfProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfProgress
     */
    select?: CtfProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfProgress
     */
    omit?: CtfProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfProgressInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    LastName: string | null
    username: string | null
    email: string | null
    profileImage: string | null
    bio: string | null
    password: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    LastName: string | null
    username: string | null
    email: string | null
    profileImage: string | null
    bio: string | null
    password: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    LastName: number
    username: number
    email: number
    profileImage: number
    bio: number
    password: number
    resetToken: number
    resetTokenExpiry: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    LastName?: true
    username?: true
    email?: true
    profileImage?: true
    bio?: true
    password?: true
    resetToken?: true
    resetTokenExpiry?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    LastName?: true
    username?: true
    email?: true
    profileImage?: true
    bio?: true
    password?: true
    resetToken?: true
    resetTokenExpiry?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    LastName?: true
    username?: true
    email?: true
    profileImage?: true
    bio?: true
    password?: true
    resetToken?: true
    resetTokenExpiry?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    LastName: string
    username: string
    email: string
    profileImage: string | null
    bio: string | null
    password: string
    resetToken: string | null
    resetTokenExpiry: Date | null
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    LastName?: boolean
    username?: boolean
    email?: boolean
    profileImage?: boolean
    bio?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tokens?: boolean | User$tokensArgs<ExtArgs>
    ctfsProgress?: boolean | User$ctfsProgressArgs<ExtArgs>
    skills?: boolean | User$skillsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    LastName?: boolean
    username?: boolean
    email?: boolean
    profileImage?: boolean
    bio?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    LastName?: boolean
    username?: boolean
    email?: boolean
    profileImage?: boolean
    bio?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    LastName?: boolean
    username?: boolean
    email?: boolean
    profileImage?: boolean
    bio?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "LastName" | "username" | "email" | "profileImage" | "bio" | "password" | "resetToken" | "resetTokenExpiry" | "lastLogin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | User$tokensArgs<ExtArgs>
    ctfsProgress?: boolean | User$ctfsProgressArgs<ExtArgs>
    skills?: boolean | User$skillsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tokens: Prisma.$AuthTokenPayload<ExtArgs>[]
      ctfsProgress: Prisma.$CtfProgressPayload<ExtArgs>[]
      skills: Prisma.$SkillsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      LastName: string
      username: string
      email: string
      profileImage: string | null
      bio: string | null
      password: string
      resetToken: string | null
      resetTokenExpiry: Date | null
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ctfsProgress<T extends User$ctfsProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$ctfsProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CtfProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skills<T extends User$skillsArgs<ExtArgs> = {}>(args?: Subset<T, User$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly LastName: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: AuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthTokenInclude<ExtArgs> | null
    where?: AuthTokenWhereInput
    orderBy?: AuthTokenOrderByWithRelationInput | AuthTokenOrderByWithRelationInput[]
    cursor?: AuthTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthTokenScalarFieldEnum | AuthTokenScalarFieldEnum[]
  }

  /**
   * User.ctfsProgress
   */
  export type User$ctfsProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfProgress
     */
    select?: CtfProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfProgress
     */
    omit?: CtfProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfProgressInclude<ExtArgs> | null
    where?: CtfProgressWhereInput
    orderBy?: CtfProgressOrderByWithRelationInput | CtfProgressOrderByWithRelationInput[]
    cursor?: CtfProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CtfProgressScalarFieldEnum | CtfProgressScalarFieldEnum[]
  }

  /**
   * User.skills
   */
  export type User$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skills
     */
    omit?: SkillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    where?: SkillsWhereInput
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    cursor?: SkillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AuthToken
   */

  export type AggregateAuthToken = {
    _count: AuthTokenCountAggregateOutputType | null
    _min: AuthTokenMinAggregateOutputType | null
    _max: AuthTokenMaxAggregateOutputType | null
  }

  export type AuthTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type AuthTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type AuthTokenCountAggregateOutputType = {
    id: number
    token: number
    expiresAt: number
    createdAt: number
    userId: number
    _all: number
  }


  export type AuthTokenMinAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
  }

  export type AuthTokenMaxAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
  }

  export type AuthTokenCountAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type AuthTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthToken to aggregate.
     */
    where?: AuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthTokens to fetch.
     */
    orderBy?: AuthTokenOrderByWithRelationInput | AuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthTokens
    **/
    _count?: true | AuthTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthTokenMaxAggregateInputType
  }

  export type GetAuthTokenAggregateType<T extends AuthTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthToken[P]>
      : GetScalarType<T[P], AggregateAuthToken[P]>
  }




  export type AuthTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthTokenWhereInput
    orderBy?: AuthTokenOrderByWithAggregationInput | AuthTokenOrderByWithAggregationInput[]
    by: AuthTokenScalarFieldEnum[] | AuthTokenScalarFieldEnum
    having?: AuthTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthTokenCountAggregateInputType | true
    _min?: AuthTokenMinAggregateInputType
    _max?: AuthTokenMaxAggregateInputType
  }

  export type AuthTokenGroupByOutputType = {
    id: string
    token: string
    expiresAt: Date
    createdAt: Date
    userId: string
    _count: AuthTokenCountAggregateOutputType | null
    _min: AuthTokenMinAggregateOutputType | null
    _max: AuthTokenMaxAggregateOutputType | null
  }

  type GetAuthTokenGroupByPayload<T extends AuthTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthTokenGroupByOutputType[P]>
            : GetScalarType<T[P], AuthTokenGroupByOutputType[P]>
        }
      >
    >


  export type AuthTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authToken"]>

  export type AuthTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authToken"]>

  export type AuthTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authToken"]>

  export type AuthTokenSelectScalar = {
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type AuthTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "expiresAt" | "createdAt" | "userId", ExtArgs["result"]["authToken"]>
  export type AuthTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      expiresAt: Date
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["authToken"]>
    composites: {}
  }

  type AuthTokenGetPayload<S extends boolean | null | undefined | AuthTokenDefaultArgs> = $Result.GetResult<Prisma.$AuthTokenPayload, S>

  type AuthTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthTokenCountAggregateInputType | true
    }

  export interface AuthTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthToken'], meta: { name: 'AuthToken' } }
    /**
     * Find zero or one AuthToken that matches the filter.
     * @param {AuthTokenFindUniqueArgs} args - Arguments to find a AuthToken
     * @example
     * // Get one AuthToken
     * const authToken = await prisma.authToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthTokenFindUniqueArgs>(args: SelectSubset<T, AuthTokenFindUniqueArgs<ExtArgs>>): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthTokenFindUniqueOrThrowArgs} args - Arguments to find a AuthToken
     * @example
     * // Get one AuthToken
     * const authToken = await prisma.authToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenFindFirstArgs} args - Arguments to find a AuthToken
     * @example
     * // Get one AuthToken
     * const authToken = await prisma.authToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthTokenFindFirstArgs>(args?: SelectSubset<T, AuthTokenFindFirstArgs<ExtArgs>>): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenFindFirstOrThrowArgs} args - Arguments to find a AuthToken
     * @example
     * // Get one AuthToken
     * const authToken = await prisma.authToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthTokens
     * const authTokens = await prisma.authToken.findMany()
     * 
     * // Get first 10 AuthTokens
     * const authTokens = await prisma.authToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authTokenWithIdOnly = await prisma.authToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthTokenFindManyArgs>(args?: SelectSubset<T, AuthTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthToken.
     * @param {AuthTokenCreateArgs} args - Arguments to create a AuthToken.
     * @example
     * // Create one AuthToken
     * const AuthToken = await prisma.authToken.create({
     *   data: {
     *     // ... data to create a AuthToken
     *   }
     * })
     * 
     */
    create<T extends AuthTokenCreateArgs>(args: SelectSubset<T, AuthTokenCreateArgs<ExtArgs>>): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthTokens.
     * @param {AuthTokenCreateManyArgs} args - Arguments to create many AuthTokens.
     * @example
     * // Create many AuthTokens
     * const authToken = await prisma.authToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthTokenCreateManyArgs>(args?: SelectSubset<T, AuthTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthTokens and returns the data saved in the database.
     * @param {AuthTokenCreateManyAndReturnArgs} args - Arguments to create many AuthTokens.
     * @example
     * // Create many AuthTokens
     * const authToken = await prisma.authToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthTokens and only return the `id`
     * const authTokenWithIdOnly = await prisma.authToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthToken.
     * @param {AuthTokenDeleteArgs} args - Arguments to delete one AuthToken.
     * @example
     * // Delete one AuthToken
     * const AuthToken = await prisma.authToken.delete({
     *   where: {
     *     // ... filter to delete one AuthToken
     *   }
     * })
     * 
     */
    delete<T extends AuthTokenDeleteArgs>(args: SelectSubset<T, AuthTokenDeleteArgs<ExtArgs>>): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthToken.
     * @param {AuthTokenUpdateArgs} args - Arguments to update one AuthToken.
     * @example
     * // Update one AuthToken
     * const authToken = await prisma.authToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthTokenUpdateArgs>(args: SelectSubset<T, AuthTokenUpdateArgs<ExtArgs>>): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthTokens.
     * @param {AuthTokenDeleteManyArgs} args - Arguments to filter AuthTokens to delete.
     * @example
     * // Delete a few AuthTokens
     * const { count } = await prisma.authToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthTokenDeleteManyArgs>(args?: SelectSubset<T, AuthTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthTokens
     * const authToken = await prisma.authToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthTokenUpdateManyArgs>(args: SelectSubset<T, AuthTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthTokens and returns the data updated in the database.
     * @param {AuthTokenUpdateManyAndReturnArgs} args - Arguments to update many AuthTokens.
     * @example
     * // Update many AuthTokens
     * const authToken = await prisma.authToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthTokens and only return the `id`
     * const authTokenWithIdOnly = await prisma.authToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthToken.
     * @param {AuthTokenUpsertArgs} args - Arguments to update or create a AuthToken.
     * @example
     * // Update or create a AuthToken
     * const authToken = await prisma.authToken.upsert({
     *   create: {
     *     // ... data to create a AuthToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthToken we want to update
     *   }
     * })
     */
    upsert<T extends AuthTokenUpsertArgs>(args: SelectSubset<T, AuthTokenUpsertArgs<ExtArgs>>): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenCountArgs} args - Arguments to filter AuthTokens to count.
     * @example
     * // Count the number of AuthTokens
     * const count = await prisma.authToken.count({
     *   where: {
     *     // ... the filter for the AuthTokens we want to count
     *   }
     * })
    **/
    count<T extends AuthTokenCountArgs>(
      args?: Subset<T, AuthTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthTokenAggregateArgs>(args: Subset<T, AuthTokenAggregateArgs>): Prisma.PrismaPromise<GetAuthTokenAggregateType<T>>

    /**
     * Group by AuthToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthTokenGroupByArgs['orderBy'] }
        : { orderBy?: AuthTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthToken model
   */
  readonly fields: AuthTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthToken model
   */
  interface AuthTokenFieldRefs {
    readonly id: FieldRef<"AuthToken", 'String'>
    readonly token: FieldRef<"AuthToken", 'String'>
    readonly expiresAt: FieldRef<"AuthToken", 'DateTime'>
    readonly createdAt: FieldRef<"AuthToken", 'DateTime'>
    readonly userId: FieldRef<"AuthToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuthToken findUnique
   */
  export type AuthTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: AuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which AuthToken to fetch.
     */
    where: AuthTokenWhereUniqueInput
  }

  /**
   * AuthToken findUniqueOrThrow
   */
  export type AuthTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: AuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which AuthToken to fetch.
     */
    where: AuthTokenWhereUniqueInput
  }

  /**
   * AuthToken findFirst
   */
  export type AuthTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: AuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which AuthToken to fetch.
     */
    where?: AuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthTokens to fetch.
     */
    orderBy?: AuthTokenOrderByWithRelationInput | AuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthTokens.
     */
    cursor?: AuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthTokens.
     */
    distinct?: AuthTokenScalarFieldEnum | AuthTokenScalarFieldEnum[]
  }

  /**
   * AuthToken findFirstOrThrow
   */
  export type AuthTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: AuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which AuthToken to fetch.
     */
    where?: AuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthTokens to fetch.
     */
    orderBy?: AuthTokenOrderByWithRelationInput | AuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthTokens.
     */
    cursor?: AuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthTokens.
     */
    distinct?: AuthTokenScalarFieldEnum | AuthTokenScalarFieldEnum[]
  }

  /**
   * AuthToken findMany
   */
  export type AuthTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: AuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which AuthTokens to fetch.
     */
    where?: AuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthTokens to fetch.
     */
    orderBy?: AuthTokenOrderByWithRelationInput | AuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthTokens.
     */
    cursor?: AuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthTokens.
     */
    skip?: number
    distinct?: AuthTokenScalarFieldEnum | AuthTokenScalarFieldEnum[]
  }

  /**
   * AuthToken create
   */
  export type AuthTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: AuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthToken.
     */
    data: XOR<AuthTokenCreateInput, AuthTokenUncheckedCreateInput>
  }

  /**
   * AuthToken createMany
   */
  export type AuthTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthTokens.
     */
    data: AuthTokenCreateManyInput | AuthTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthToken createManyAndReturn
   */
  export type AuthTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: AuthTokenOmit<ExtArgs> | null
    /**
     * The data used to create many AuthTokens.
     */
    data: AuthTokenCreateManyInput | AuthTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthToken update
   */
  export type AuthTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: AuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthToken.
     */
    data: XOR<AuthTokenUpdateInput, AuthTokenUncheckedUpdateInput>
    /**
     * Choose, which AuthToken to update.
     */
    where: AuthTokenWhereUniqueInput
  }

  /**
   * AuthToken updateMany
   */
  export type AuthTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthTokens.
     */
    data: XOR<AuthTokenUpdateManyMutationInput, AuthTokenUncheckedUpdateManyInput>
    /**
     * Filter which AuthTokens to update
     */
    where?: AuthTokenWhereInput
    /**
     * Limit how many AuthTokens to update.
     */
    limit?: number
  }

  /**
   * AuthToken updateManyAndReturn
   */
  export type AuthTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: AuthTokenOmit<ExtArgs> | null
    /**
     * The data used to update AuthTokens.
     */
    data: XOR<AuthTokenUpdateManyMutationInput, AuthTokenUncheckedUpdateManyInput>
    /**
     * Filter which AuthTokens to update
     */
    where?: AuthTokenWhereInput
    /**
     * Limit how many AuthTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthToken upsert
   */
  export type AuthTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: AuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthToken to update in case it exists.
     */
    where: AuthTokenWhereUniqueInput
    /**
     * In case the AuthToken found by the `where` argument doesn't exist, create a new AuthToken with this data.
     */
    create: XOR<AuthTokenCreateInput, AuthTokenUncheckedCreateInput>
    /**
     * In case the AuthToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthTokenUpdateInput, AuthTokenUncheckedUpdateInput>
  }

  /**
   * AuthToken delete
   */
  export type AuthTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: AuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthTokenInclude<ExtArgs> | null
    /**
     * Filter which AuthToken to delete.
     */
    where: AuthTokenWhereUniqueInput
  }

  /**
   * AuthToken deleteMany
   */
  export type AuthTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthTokens to delete
     */
    where?: AuthTokenWhereInput
    /**
     * Limit how many AuthTokens to delete.
     */
    limit?: number
  }

  /**
   * AuthToken without action
   */
  export type AuthTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: AuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthTokenInclude<ExtArgs> | null
  }


  /**
   * Model CTFS
   */

  export type AggregateCTFS = {
    _count: CTFSCountAggregateOutputType | null
    _avg: CTFSAvgAggregateOutputType | null
    _sum: CTFSSumAggregateOutputType | null
    _min: CTFSMinAggregateOutputType | null
    _max: CTFSMaxAggregateOutputType | null
  }

  export type CTFSAvgAggregateOutputType = {
    totalLevels: number | null
    totalPlayers: number | null
  }

  export type CTFSSumAggregateOutputType = {
    totalLevels: number | null
    totalPlayers: number | null
  }

  export type CTFSMinAggregateOutputType = {
    ctfName: string | null
    totalLevels: number | null
    difficulty: string | null
    imgSrc: string | null
    subHeader: string | null
    title: string | null
    topic: string | null
    totalPlayers: number | null
  }

  export type CTFSMaxAggregateOutputType = {
    ctfName: string | null
    totalLevels: number | null
    difficulty: string | null
    imgSrc: string | null
    subHeader: string | null
    title: string | null
    topic: string | null
    totalPlayers: number | null
  }

  export type CTFSCountAggregateOutputType = {
    ctfName: number
    totalLevels: number
    difficulty: number
    imgSrc: number
    subHeader: number
    title: number
    topic: number
    totalPlayers: number
    _all: number
  }


  export type CTFSAvgAggregateInputType = {
    totalLevels?: true
    totalPlayers?: true
  }

  export type CTFSSumAggregateInputType = {
    totalLevels?: true
    totalPlayers?: true
  }

  export type CTFSMinAggregateInputType = {
    ctfName?: true
    totalLevels?: true
    difficulty?: true
    imgSrc?: true
    subHeader?: true
    title?: true
    topic?: true
    totalPlayers?: true
  }

  export type CTFSMaxAggregateInputType = {
    ctfName?: true
    totalLevels?: true
    difficulty?: true
    imgSrc?: true
    subHeader?: true
    title?: true
    topic?: true
    totalPlayers?: true
  }

  export type CTFSCountAggregateInputType = {
    ctfName?: true
    totalLevels?: true
    difficulty?: true
    imgSrc?: true
    subHeader?: true
    title?: true
    topic?: true
    totalPlayers?: true
    _all?: true
  }

  export type CTFSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CTFS to aggregate.
     */
    where?: CTFSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CTFS to fetch.
     */
    orderBy?: CTFSOrderByWithRelationInput | CTFSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CTFSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CTFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CTFS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CTFS
    **/
    _count?: true | CTFSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CTFSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CTFSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CTFSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CTFSMaxAggregateInputType
  }

  export type GetCTFSAggregateType<T extends CTFSAggregateArgs> = {
        [P in keyof T & keyof AggregateCTFS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCTFS[P]>
      : GetScalarType<T[P], AggregateCTFS[P]>
  }




  export type CTFSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CTFSWhereInput
    orderBy?: CTFSOrderByWithAggregationInput | CTFSOrderByWithAggregationInput[]
    by: CTFSScalarFieldEnum[] | CTFSScalarFieldEnum
    having?: CTFSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CTFSCountAggregateInputType | true
    _avg?: CTFSAvgAggregateInputType
    _sum?: CTFSSumAggregateInputType
    _min?: CTFSMinAggregateInputType
    _max?: CTFSMaxAggregateInputType
  }

  export type CTFSGroupByOutputType = {
    ctfName: string
    totalLevels: number
    difficulty: string
    imgSrc: string
    subHeader: string
    title: string
    topic: string
    totalPlayers: number
    _count: CTFSCountAggregateOutputType | null
    _avg: CTFSAvgAggregateOutputType | null
    _sum: CTFSSumAggregateOutputType | null
    _min: CTFSMinAggregateOutputType | null
    _max: CTFSMaxAggregateOutputType | null
  }

  type GetCTFSGroupByPayload<T extends CTFSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CTFSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CTFSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CTFSGroupByOutputType[P]>
            : GetScalarType<T[P], CTFSGroupByOutputType[P]>
        }
      >
    >


  export type CTFSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ctfName?: boolean
    totalLevels?: boolean
    difficulty?: boolean
    imgSrc?: boolean
    subHeader?: boolean
    title?: boolean
    topic?: boolean
    totalPlayers?: boolean
  }, ExtArgs["result"]["cTFS"]>

  export type CTFSSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ctfName?: boolean
    totalLevels?: boolean
    difficulty?: boolean
    imgSrc?: boolean
    subHeader?: boolean
    title?: boolean
    topic?: boolean
    totalPlayers?: boolean
  }, ExtArgs["result"]["cTFS"]>

  export type CTFSSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ctfName?: boolean
    totalLevels?: boolean
    difficulty?: boolean
    imgSrc?: boolean
    subHeader?: boolean
    title?: boolean
    topic?: boolean
    totalPlayers?: boolean
  }, ExtArgs["result"]["cTFS"]>

  export type CTFSSelectScalar = {
    ctfName?: boolean
    totalLevels?: boolean
    difficulty?: boolean
    imgSrc?: boolean
    subHeader?: boolean
    title?: boolean
    topic?: boolean
    totalPlayers?: boolean
  }

  export type CTFSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ctfName" | "totalLevels" | "difficulty" | "imgSrc" | "subHeader" | "title" | "topic" | "totalPlayers", ExtArgs["result"]["cTFS"]>

  export type $CTFSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CTFS"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ctfName: string
      totalLevels: number
      difficulty: string
      imgSrc: string
      subHeader: string
      title: string
      topic: string
      totalPlayers: number
    }, ExtArgs["result"]["cTFS"]>
    composites: {}
  }

  type CTFSGetPayload<S extends boolean | null | undefined | CTFSDefaultArgs> = $Result.GetResult<Prisma.$CTFSPayload, S>

  type CTFSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CTFSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CTFSCountAggregateInputType | true
    }

  export interface CTFSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CTFS'], meta: { name: 'CTFS' } }
    /**
     * Find zero or one CTFS that matches the filter.
     * @param {CTFSFindUniqueArgs} args - Arguments to find a CTFS
     * @example
     * // Get one CTFS
     * const cTFS = await prisma.cTFS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CTFSFindUniqueArgs>(args: SelectSubset<T, CTFSFindUniqueArgs<ExtArgs>>): Prisma__CTFSClient<$Result.GetResult<Prisma.$CTFSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CTFS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CTFSFindUniqueOrThrowArgs} args - Arguments to find a CTFS
     * @example
     * // Get one CTFS
     * const cTFS = await prisma.cTFS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CTFSFindUniqueOrThrowArgs>(args: SelectSubset<T, CTFSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CTFSClient<$Result.GetResult<Prisma.$CTFSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CTFS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CTFSFindFirstArgs} args - Arguments to find a CTFS
     * @example
     * // Get one CTFS
     * const cTFS = await prisma.cTFS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CTFSFindFirstArgs>(args?: SelectSubset<T, CTFSFindFirstArgs<ExtArgs>>): Prisma__CTFSClient<$Result.GetResult<Prisma.$CTFSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CTFS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CTFSFindFirstOrThrowArgs} args - Arguments to find a CTFS
     * @example
     * // Get one CTFS
     * const cTFS = await prisma.cTFS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CTFSFindFirstOrThrowArgs>(args?: SelectSubset<T, CTFSFindFirstOrThrowArgs<ExtArgs>>): Prisma__CTFSClient<$Result.GetResult<Prisma.$CTFSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CTFS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CTFSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CTFS
     * const cTFS = await prisma.cTFS.findMany()
     * 
     * // Get first 10 CTFS
     * const cTFS = await prisma.cTFS.findMany({ take: 10 })
     * 
     * // Only select the `ctfName`
     * const cTFSWithCtfNameOnly = await prisma.cTFS.findMany({ select: { ctfName: true } })
     * 
     */
    findMany<T extends CTFSFindManyArgs>(args?: SelectSubset<T, CTFSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CTFSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CTFS.
     * @param {CTFSCreateArgs} args - Arguments to create a CTFS.
     * @example
     * // Create one CTFS
     * const CTFS = await prisma.cTFS.create({
     *   data: {
     *     // ... data to create a CTFS
     *   }
     * })
     * 
     */
    create<T extends CTFSCreateArgs>(args: SelectSubset<T, CTFSCreateArgs<ExtArgs>>): Prisma__CTFSClient<$Result.GetResult<Prisma.$CTFSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CTFS.
     * @param {CTFSCreateManyArgs} args - Arguments to create many CTFS.
     * @example
     * // Create many CTFS
     * const cTFS = await prisma.cTFS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CTFSCreateManyArgs>(args?: SelectSubset<T, CTFSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CTFS and returns the data saved in the database.
     * @param {CTFSCreateManyAndReturnArgs} args - Arguments to create many CTFS.
     * @example
     * // Create many CTFS
     * const cTFS = await prisma.cTFS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CTFS and only return the `ctfName`
     * const cTFSWithCtfNameOnly = await prisma.cTFS.createManyAndReturn({
     *   select: { ctfName: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CTFSCreateManyAndReturnArgs>(args?: SelectSubset<T, CTFSCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CTFSPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CTFS.
     * @param {CTFSDeleteArgs} args - Arguments to delete one CTFS.
     * @example
     * // Delete one CTFS
     * const CTFS = await prisma.cTFS.delete({
     *   where: {
     *     // ... filter to delete one CTFS
     *   }
     * })
     * 
     */
    delete<T extends CTFSDeleteArgs>(args: SelectSubset<T, CTFSDeleteArgs<ExtArgs>>): Prisma__CTFSClient<$Result.GetResult<Prisma.$CTFSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CTFS.
     * @param {CTFSUpdateArgs} args - Arguments to update one CTFS.
     * @example
     * // Update one CTFS
     * const cTFS = await prisma.cTFS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CTFSUpdateArgs>(args: SelectSubset<T, CTFSUpdateArgs<ExtArgs>>): Prisma__CTFSClient<$Result.GetResult<Prisma.$CTFSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CTFS.
     * @param {CTFSDeleteManyArgs} args - Arguments to filter CTFS to delete.
     * @example
     * // Delete a few CTFS
     * const { count } = await prisma.cTFS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CTFSDeleteManyArgs>(args?: SelectSubset<T, CTFSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CTFS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CTFSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CTFS
     * const cTFS = await prisma.cTFS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CTFSUpdateManyArgs>(args: SelectSubset<T, CTFSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CTFS and returns the data updated in the database.
     * @param {CTFSUpdateManyAndReturnArgs} args - Arguments to update many CTFS.
     * @example
     * // Update many CTFS
     * const cTFS = await prisma.cTFS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CTFS and only return the `ctfName`
     * const cTFSWithCtfNameOnly = await prisma.cTFS.updateManyAndReturn({
     *   select: { ctfName: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CTFSUpdateManyAndReturnArgs>(args: SelectSubset<T, CTFSUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CTFSPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CTFS.
     * @param {CTFSUpsertArgs} args - Arguments to update or create a CTFS.
     * @example
     * // Update or create a CTFS
     * const cTFS = await prisma.cTFS.upsert({
     *   create: {
     *     // ... data to create a CTFS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CTFS we want to update
     *   }
     * })
     */
    upsert<T extends CTFSUpsertArgs>(args: SelectSubset<T, CTFSUpsertArgs<ExtArgs>>): Prisma__CTFSClient<$Result.GetResult<Prisma.$CTFSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CTFS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CTFSCountArgs} args - Arguments to filter CTFS to count.
     * @example
     * // Count the number of CTFS
     * const count = await prisma.cTFS.count({
     *   where: {
     *     // ... the filter for the CTFS we want to count
     *   }
     * })
    **/
    count<T extends CTFSCountArgs>(
      args?: Subset<T, CTFSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CTFSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CTFS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CTFSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CTFSAggregateArgs>(args: Subset<T, CTFSAggregateArgs>): Prisma.PrismaPromise<GetCTFSAggregateType<T>>

    /**
     * Group by CTFS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CTFSGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CTFSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CTFSGroupByArgs['orderBy'] }
        : { orderBy?: CTFSGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CTFSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCTFSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CTFS model
   */
  readonly fields: CTFSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CTFS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CTFSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CTFS model
   */
  interface CTFSFieldRefs {
    readonly ctfName: FieldRef<"CTFS", 'String'>
    readonly totalLevels: FieldRef<"CTFS", 'Int'>
    readonly difficulty: FieldRef<"CTFS", 'String'>
    readonly imgSrc: FieldRef<"CTFS", 'String'>
    readonly subHeader: FieldRef<"CTFS", 'String'>
    readonly title: FieldRef<"CTFS", 'String'>
    readonly topic: FieldRef<"CTFS", 'String'>
    readonly totalPlayers: FieldRef<"CTFS", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CTFS findUnique
   */
  export type CTFSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTFS
     */
    select?: CTFSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTFS
     */
    omit?: CTFSOmit<ExtArgs> | null
    /**
     * Filter, which CTFS to fetch.
     */
    where: CTFSWhereUniqueInput
  }

  /**
   * CTFS findUniqueOrThrow
   */
  export type CTFSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTFS
     */
    select?: CTFSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTFS
     */
    omit?: CTFSOmit<ExtArgs> | null
    /**
     * Filter, which CTFS to fetch.
     */
    where: CTFSWhereUniqueInput
  }

  /**
   * CTFS findFirst
   */
  export type CTFSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTFS
     */
    select?: CTFSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTFS
     */
    omit?: CTFSOmit<ExtArgs> | null
    /**
     * Filter, which CTFS to fetch.
     */
    where?: CTFSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CTFS to fetch.
     */
    orderBy?: CTFSOrderByWithRelationInput | CTFSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CTFS.
     */
    cursor?: CTFSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CTFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CTFS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CTFS.
     */
    distinct?: CTFSScalarFieldEnum | CTFSScalarFieldEnum[]
  }

  /**
   * CTFS findFirstOrThrow
   */
  export type CTFSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTFS
     */
    select?: CTFSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTFS
     */
    omit?: CTFSOmit<ExtArgs> | null
    /**
     * Filter, which CTFS to fetch.
     */
    where?: CTFSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CTFS to fetch.
     */
    orderBy?: CTFSOrderByWithRelationInput | CTFSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CTFS.
     */
    cursor?: CTFSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CTFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CTFS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CTFS.
     */
    distinct?: CTFSScalarFieldEnum | CTFSScalarFieldEnum[]
  }

  /**
   * CTFS findMany
   */
  export type CTFSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTFS
     */
    select?: CTFSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTFS
     */
    omit?: CTFSOmit<ExtArgs> | null
    /**
     * Filter, which CTFS to fetch.
     */
    where?: CTFSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CTFS to fetch.
     */
    orderBy?: CTFSOrderByWithRelationInput | CTFSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CTFS.
     */
    cursor?: CTFSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CTFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CTFS.
     */
    skip?: number
    distinct?: CTFSScalarFieldEnum | CTFSScalarFieldEnum[]
  }

  /**
   * CTFS create
   */
  export type CTFSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTFS
     */
    select?: CTFSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTFS
     */
    omit?: CTFSOmit<ExtArgs> | null
    /**
     * The data needed to create a CTFS.
     */
    data: XOR<CTFSCreateInput, CTFSUncheckedCreateInput>
  }

  /**
   * CTFS createMany
   */
  export type CTFSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CTFS.
     */
    data: CTFSCreateManyInput | CTFSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CTFS createManyAndReturn
   */
  export type CTFSCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTFS
     */
    select?: CTFSSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CTFS
     */
    omit?: CTFSOmit<ExtArgs> | null
    /**
     * The data used to create many CTFS.
     */
    data: CTFSCreateManyInput | CTFSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CTFS update
   */
  export type CTFSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTFS
     */
    select?: CTFSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTFS
     */
    omit?: CTFSOmit<ExtArgs> | null
    /**
     * The data needed to update a CTFS.
     */
    data: XOR<CTFSUpdateInput, CTFSUncheckedUpdateInput>
    /**
     * Choose, which CTFS to update.
     */
    where: CTFSWhereUniqueInput
  }

  /**
   * CTFS updateMany
   */
  export type CTFSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CTFS.
     */
    data: XOR<CTFSUpdateManyMutationInput, CTFSUncheckedUpdateManyInput>
    /**
     * Filter which CTFS to update
     */
    where?: CTFSWhereInput
    /**
     * Limit how many CTFS to update.
     */
    limit?: number
  }

  /**
   * CTFS updateManyAndReturn
   */
  export type CTFSUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTFS
     */
    select?: CTFSSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CTFS
     */
    omit?: CTFSOmit<ExtArgs> | null
    /**
     * The data used to update CTFS.
     */
    data: XOR<CTFSUpdateManyMutationInput, CTFSUncheckedUpdateManyInput>
    /**
     * Filter which CTFS to update
     */
    where?: CTFSWhereInput
    /**
     * Limit how many CTFS to update.
     */
    limit?: number
  }

  /**
   * CTFS upsert
   */
  export type CTFSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTFS
     */
    select?: CTFSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTFS
     */
    omit?: CTFSOmit<ExtArgs> | null
    /**
     * The filter to search for the CTFS to update in case it exists.
     */
    where: CTFSWhereUniqueInput
    /**
     * In case the CTFS found by the `where` argument doesn't exist, create a new CTFS with this data.
     */
    create: XOR<CTFSCreateInput, CTFSUncheckedCreateInput>
    /**
     * In case the CTFS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CTFSUpdateInput, CTFSUncheckedUpdateInput>
  }

  /**
   * CTFS delete
   */
  export type CTFSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTFS
     */
    select?: CTFSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTFS
     */
    omit?: CTFSOmit<ExtArgs> | null
    /**
     * Filter which CTFS to delete.
     */
    where: CTFSWhereUniqueInput
  }

  /**
   * CTFS deleteMany
   */
  export type CTFSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CTFS to delete
     */
    where?: CTFSWhereInput
    /**
     * Limit how many CTFS to delete.
     */
    limit?: number
  }

  /**
   * CTFS without action
   */
  export type CTFSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTFS
     */
    select?: CTFSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTFS
     */
    omit?: CTFSOmit<ExtArgs> | null
  }


  /**
   * Model Credentials
   */

  export type AggregateCredentials = {
    _count: CredentialsCountAggregateOutputType | null
    _avg: CredentialsAvgAggregateOutputType | null
    _sum: CredentialsSumAggregateOutputType | null
    _min: CredentialsMinAggregateOutputType | null
    _max: CredentialsMaxAggregateOutputType | null
  }

  export type CredentialsAvgAggregateOutputType = {
    Port: number | null
  }

  export type CredentialsSumAggregateOutputType = {
    Port: number | null
  }

  export type CredentialsMinAggregateOutputType = {
    ctfLevelUniqueId: string | null
    host: string | null
    username: string | null
    password: string | null
    Port: number | null
  }

  export type CredentialsMaxAggregateOutputType = {
    ctfLevelUniqueId: string | null
    host: string | null
    username: string | null
    password: string | null
    Port: number | null
  }

  export type CredentialsCountAggregateOutputType = {
    ctfLevelUniqueId: number
    host: number
    username: number
    password: number
    Port: number
    _all: number
  }


  export type CredentialsAvgAggregateInputType = {
    Port?: true
  }

  export type CredentialsSumAggregateInputType = {
    Port?: true
  }

  export type CredentialsMinAggregateInputType = {
    ctfLevelUniqueId?: true
    host?: true
    username?: true
    password?: true
    Port?: true
  }

  export type CredentialsMaxAggregateInputType = {
    ctfLevelUniqueId?: true
    host?: true
    username?: true
    password?: true
    Port?: true
  }

  export type CredentialsCountAggregateInputType = {
    ctfLevelUniqueId?: true
    host?: true
    username?: true
    password?: true
    Port?: true
    _all?: true
  }

  export type CredentialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credentials to aggregate.
     */
    where?: CredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialsOrderByWithRelationInput | CredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Credentials
    **/
    _count?: true | CredentialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CredentialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CredentialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredentialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredentialsMaxAggregateInputType
  }

  export type GetCredentialsAggregateType<T extends CredentialsAggregateArgs> = {
        [P in keyof T & keyof AggregateCredentials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredentials[P]>
      : GetScalarType<T[P], AggregateCredentials[P]>
  }




  export type CredentialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CredentialsWhereInput
    orderBy?: CredentialsOrderByWithAggregationInput | CredentialsOrderByWithAggregationInput[]
    by: CredentialsScalarFieldEnum[] | CredentialsScalarFieldEnum
    having?: CredentialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredentialsCountAggregateInputType | true
    _avg?: CredentialsAvgAggregateInputType
    _sum?: CredentialsSumAggregateInputType
    _min?: CredentialsMinAggregateInputType
    _max?: CredentialsMaxAggregateInputType
  }

  export type CredentialsGroupByOutputType = {
    ctfLevelUniqueId: string
    host: string
    username: string
    password: string | null
    Port: number
    _count: CredentialsCountAggregateOutputType | null
    _avg: CredentialsAvgAggregateOutputType | null
    _sum: CredentialsSumAggregateOutputType | null
    _min: CredentialsMinAggregateOutputType | null
    _max: CredentialsMaxAggregateOutputType | null
  }

  type GetCredentialsGroupByPayload<T extends CredentialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CredentialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredentialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredentialsGroupByOutputType[P]>
            : GetScalarType<T[P], CredentialsGroupByOutputType[P]>
        }
      >
    >


  export type CredentialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ctfLevelUniqueId?: boolean
    host?: boolean
    username?: boolean
    password?: boolean
    Port?: boolean
    ctflevel?: boolean | CtfLevelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credentials"]>

  export type CredentialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ctfLevelUniqueId?: boolean
    host?: boolean
    username?: boolean
    password?: boolean
    Port?: boolean
    ctflevel?: boolean | CtfLevelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credentials"]>

  export type CredentialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ctfLevelUniqueId?: boolean
    host?: boolean
    username?: boolean
    password?: boolean
    Port?: boolean
    ctflevel?: boolean | CtfLevelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credentials"]>

  export type CredentialsSelectScalar = {
    ctfLevelUniqueId?: boolean
    host?: boolean
    username?: boolean
    password?: boolean
    Port?: boolean
  }

  export type CredentialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ctfLevelUniqueId" | "host" | "username" | "password" | "Port", ExtArgs["result"]["credentials"]>
  export type CredentialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ctflevel?: boolean | CtfLevelsDefaultArgs<ExtArgs>
  }
  export type CredentialsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ctflevel?: boolean | CtfLevelsDefaultArgs<ExtArgs>
  }
  export type CredentialsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ctflevel?: boolean | CtfLevelsDefaultArgs<ExtArgs>
  }

  export type $CredentialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Credentials"
    objects: {
      ctflevel: Prisma.$CtfLevelsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ctfLevelUniqueId: string
      host: string
      username: string
      password: string | null
      Port: number
    }, ExtArgs["result"]["credentials"]>
    composites: {}
  }

  type CredentialsGetPayload<S extends boolean | null | undefined | CredentialsDefaultArgs> = $Result.GetResult<Prisma.$CredentialsPayload, S>

  type CredentialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CredentialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CredentialsCountAggregateInputType | true
    }

  export interface CredentialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Credentials'], meta: { name: 'Credentials' } }
    /**
     * Find zero or one Credentials that matches the filter.
     * @param {CredentialsFindUniqueArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CredentialsFindUniqueArgs>(args: SelectSubset<T, CredentialsFindUniqueArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Credentials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CredentialsFindUniqueOrThrowArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CredentialsFindUniqueOrThrowArgs>(args: SelectSubset<T, CredentialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsFindFirstArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CredentialsFindFirstArgs>(args?: SelectSubset<T, CredentialsFindFirstArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credentials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsFindFirstOrThrowArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CredentialsFindFirstOrThrowArgs>(args?: SelectSubset<T, CredentialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credentials
     * const credentials = await prisma.credentials.findMany()
     * 
     * // Get first 10 Credentials
     * const credentials = await prisma.credentials.findMany({ take: 10 })
     * 
     * // Only select the `ctfLevelUniqueId`
     * const credentialsWithCtfLevelUniqueIdOnly = await prisma.credentials.findMany({ select: { ctfLevelUniqueId: true } })
     * 
     */
    findMany<T extends CredentialsFindManyArgs>(args?: SelectSubset<T, CredentialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Credentials.
     * @param {CredentialsCreateArgs} args - Arguments to create a Credentials.
     * @example
     * // Create one Credentials
     * const Credentials = await prisma.credentials.create({
     *   data: {
     *     // ... data to create a Credentials
     *   }
     * })
     * 
     */
    create<T extends CredentialsCreateArgs>(args: SelectSubset<T, CredentialsCreateArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Credentials.
     * @param {CredentialsCreateManyArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credentials = await prisma.credentials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CredentialsCreateManyArgs>(args?: SelectSubset<T, CredentialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credentials and returns the data saved in the database.
     * @param {CredentialsCreateManyAndReturnArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credentials = await prisma.credentials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credentials and only return the `ctfLevelUniqueId`
     * const credentialsWithCtfLevelUniqueIdOnly = await prisma.credentials.createManyAndReturn({
     *   select: { ctfLevelUniqueId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CredentialsCreateManyAndReturnArgs>(args?: SelectSubset<T, CredentialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Credentials.
     * @param {CredentialsDeleteArgs} args - Arguments to delete one Credentials.
     * @example
     * // Delete one Credentials
     * const Credentials = await prisma.credentials.delete({
     *   where: {
     *     // ... filter to delete one Credentials
     *   }
     * })
     * 
     */
    delete<T extends CredentialsDeleteArgs>(args: SelectSubset<T, CredentialsDeleteArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Credentials.
     * @param {CredentialsUpdateArgs} args - Arguments to update one Credentials.
     * @example
     * // Update one Credentials
     * const credentials = await prisma.credentials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CredentialsUpdateArgs>(args: SelectSubset<T, CredentialsUpdateArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Credentials.
     * @param {CredentialsDeleteManyArgs} args - Arguments to filter Credentials to delete.
     * @example
     * // Delete a few Credentials
     * const { count } = await prisma.credentials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CredentialsDeleteManyArgs>(args?: SelectSubset<T, CredentialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credentials
     * const credentials = await prisma.credentials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CredentialsUpdateManyArgs>(args: SelectSubset<T, CredentialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials and returns the data updated in the database.
     * @param {CredentialsUpdateManyAndReturnArgs} args - Arguments to update many Credentials.
     * @example
     * // Update many Credentials
     * const credentials = await prisma.credentials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Credentials and only return the `ctfLevelUniqueId`
     * const credentialsWithCtfLevelUniqueIdOnly = await prisma.credentials.updateManyAndReturn({
     *   select: { ctfLevelUniqueId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CredentialsUpdateManyAndReturnArgs>(args: SelectSubset<T, CredentialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Credentials.
     * @param {CredentialsUpsertArgs} args - Arguments to update or create a Credentials.
     * @example
     * // Update or create a Credentials
     * const credentials = await prisma.credentials.upsert({
     *   create: {
     *     // ... data to create a Credentials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credentials we want to update
     *   }
     * })
     */
    upsert<T extends CredentialsUpsertArgs>(args: SelectSubset<T, CredentialsUpsertArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsCountArgs} args - Arguments to filter Credentials to count.
     * @example
     * // Count the number of Credentials
     * const count = await prisma.credentials.count({
     *   where: {
     *     // ... the filter for the Credentials we want to count
     *   }
     * })
    **/
    count<T extends CredentialsCountArgs>(
      args?: Subset<T, CredentialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredentialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CredentialsAggregateArgs>(args: Subset<T, CredentialsAggregateArgs>): Prisma.PrismaPromise<GetCredentialsAggregateType<T>>

    /**
     * Group by Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CredentialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CredentialsGroupByArgs['orderBy'] }
        : { orderBy?: CredentialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CredentialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredentialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Credentials model
   */
  readonly fields: CredentialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Credentials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CredentialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ctflevel<T extends CtfLevelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CtfLevelsDefaultArgs<ExtArgs>>): Prisma__CtfLevelsClient<$Result.GetResult<Prisma.$CtfLevelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Credentials model
   */
  interface CredentialsFieldRefs {
    readonly ctfLevelUniqueId: FieldRef<"Credentials", 'String'>
    readonly host: FieldRef<"Credentials", 'String'>
    readonly username: FieldRef<"Credentials", 'String'>
    readonly password: FieldRef<"Credentials", 'String'>
    readonly Port: FieldRef<"Credentials", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Credentials findUnique
   */
  export type CredentialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where: CredentialsWhereUniqueInput
  }

  /**
   * Credentials findUniqueOrThrow
   */
  export type CredentialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where: CredentialsWhereUniqueInput
  }

  /**
   * Credentials findFirst
   */
  export type CredentialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where?: CredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialsOrderByWithRelationInput | CredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     */
    cursor?: CredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     */
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * Credentials findFirstOrThrow
   */
  export type CredentialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where?: CredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialsOrderByWithRelationInput | CredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     */
    cursor?: CredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     */
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * Credentials findMany
   */
  export type CredentialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where?: CredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialsOrderByWithRelationInput | CredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Credentials.
     */
    cursor?: CredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * Credentials create
   */
  export type CredentialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * The data needed to create a Credentials.
     */
    data: XOR<CredentialsCreateInput, CredentialsUncheckedCreateInput>
  }

  /**
   * Credentials createMany
   */
  export type CredentialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Credentials.
     */
    data: CredentialsCreateManyInput | CredentialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credentials createManyAndReturn
   */
  export type CredentialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * The data used to create many Credentials.
     */
    data: CredentialsCreateManyInput | CredentialsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credentials update
   */
  export type CredentialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * The data needed to update a Credentials.
     */
    data: XOR<CredentialsUpdateInput, CredentialsUncheckedUpdateInput>
    /**
     * Choose, which Credentials to update.
     */
    where: CredentialsWhereUniqueInput
  }

  /**
   * Credentials updateMany
   */
  export type CredentialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Credentials.
     */
    data: XOR<CredentialsUpdateManyMutationInput, CredentialsUncheckedUpdateManyInput>
    /**
     * Filter which Credentials to update
     */
    where?: CredentialsWhereInput
    /**
     * Limit how many Credentials to update.
     */
    limit?: number
  }

  /**
   * Credentials updateManyAndReturn
   */
  export type CredentialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * The data used to update Credentials.
     */
    data: XOR<CredentialsUpdateManyMutationInput, CredentialsUncheckedUpdateManyInput>
    /**
     * Filter which Credentials to update
     */
    where?: CredentialsWhereInput
    /**
     * Limit how many Credentials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credentials upsert
   */
  export type CredentialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * The filter to search for the Credentials to update in case it exists.
     */
    where: CredentialsWhereUniqueInput
    /**
     * In case the Credentials found by the `where` argument doesn't exist, create a new Credentials with this data.
     */
    create: XOR<CredentialsCreateInput, CredentialsUncheckedCreateInput>
    /**
     * In case the Credentials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CredentialsUpdateInput, CredentialsUncheckedUpdateInput>
  }

  /**
   * Credentials delete
   */
  export type CredentialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter which Credentials to delete.
     */
    where: CredentialsWhereUniqueInput
  }

  /**
   * Credentials deleteMany
   */
  export type CredentialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credentials to delete
     */
    where?: CredentialsWhereInput
    /**
     * Limit how many Credentials to delete.
     */
    limit?: number
  }

  /**
   * Credentials without action
   */
  export type CredentialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
  }


  /**
   * Model CtfLevels
   */

  export type AggregateCtfLevels = {
    _count: CtfLevelsCountAggregateOutputType | null
    _avg: CtfLevelsAvgAggregateOutputType | null
    _sum: CtfLevelsSumAggregateOutputType | null
    _min: CtfLevelsMinAggregateOutputType | null
    _max: CtfLevelsMaxAggregateOutputType | null
  }

  export type CtfLevelsAvgAggregateOutputType = {
    levelNo: number | null
  }

  export type CtfLevelsSumAggregateOutputType = {
    levelNo: number | null
  }

  export type CtfLevelsMinAggregateOutputType = {
    password: string | null
    levelNo: number | null
    ctfName: string | null
    id: string | null
    uniqueId: string | null
    goal: string | null
    description: string | null
    expectedOutput: string | null
    difficulty: $Enums.Difficulty | null
    category: $Enums.Category | null
    estimatedTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
    files: string | null
  }

  export type CtfLevelsMaxAggregateOutputType = {
    password: string | null
    levelNo: number | null
    ctfName: string | null
    id: string | null
    uniqueId: string | null
    goal: string | null
    description: string | null
    expectedOutput: string | null
    difficulty: $Enums.Difficulty | null
    category: $Enums.Category | null
    estimatedTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
    files: string | null
  }

  export type CtfLevelsCountAggregateOutputType = {
    password: number
    levelNo: number
    ctfName: number
    id: number
    uniqueId: number
    goal: number
    links: number
    description: number
    commands: number
    hints: number
    expectedOutput: number
    difficulty: number
    category: number
    estimatedTime: number
    createdAt: number
    updatedAt: number
    files: number
    _all: number
  }


  export type CtfLevelsAvgAggregateInputType = {
    levelNo?: true
  }

  export type CtfLevelsSumAggregateInputType = {
    levelNo?: true
  }

  export type CtfLevelsMinAggregateInputType = {
    password?: true
    levelNo?: true
    ctfName?: true
    id?: true
    uniqueId?: true
    goal?: true
    description?: true
    expectedOutput?: true
    difficulty?: true
    category?: true
    estimatedTime?: true
    createdAt?: true
    updatedAt?: true
    files?: true
  }

  export type CtfLevelsMaxAggregateInputType = {
    password?: true
    levelNo?: true
    ctfName?: true
    id?: true
    uniqueId?: true
    goal?: true
    description?: true
    expectedOutput?: true
    difficulty?: true
    category?: true
    estimatedTime?: true
    createdAt?: true
    updatedAt?: true
    files?: true
  }

  export type CtfLevelsCountAggregateInputType = {
    password?: true
    levelNo?: true
    ctfName?: true
    id?: true
    uniqueId?: true
    goal?: true
    links?: true
    description?: true
    commands?: true
    hints?: true
    expectedOutput?: true
    difficulty?: true
    category?: true
    estimatedTime?: true
    createdAt?: true
    updatedAt?: true
    files?: true
    _all?: true
  }

  export type CtfLevelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CtfLevels to aggregate.
     */
    where?: CtfLevelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CtfLevels to fetch.
     */
    orderBy?: CtfLevelsOrderByWithRelationInput | CtfLevelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CtfLevelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CtfLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CtfLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CtfLevels
    **/
    _count?: true | CtfLevelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CtfLevelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CtfLevelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CtfLevelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CtfLevelsMaxAggregateInputType
  }

  export type GetCtfLevelsAggregateType<T extends CtfLevelsAggregateArgs> = {
        [P in keyof T & keyof AggregateCtfLevels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCtfLevels[P]>
      : GetScalarType<T[P], AggregateCtfLevels[P]>
  }




  export type CtfLevelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CtfLevelsWhereInput
    orderBy?: CtfLevelsOrderByWithAggregationInput | CtfLevelsOrderByWithAggregationInput[]
    by: CtfLevelsScalarFieldEnum[] | CtfLevelsScalarFieldEnum
    having?: CtfLevelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CtfLevelsCountAggregateInputType | true
    _avg?: CtfLevelsAvgAggregateInputType
    _sum?: CtfLevelsSumAggregateInputType
    _min?: CtfLevelsMinAggregateInputType
    _max?: CtfLevelsMaxAggregateInputType
  }

  export type CtfLevelsGroupByOutputType = {
    password: string
    levelNo: number
    ctfName: string
    id: string
    uniqueId: string
    goal: string
    links: string[]
    description: string
    commands: string[]
    hints: string[]
    expectedOutput: string | null
    difficulty: $Enums.Difficulty
    category: $Enums.Category
    estimatedTime: string
    createdAt: Date
    updatedAt: Date
    files: string | null
    _count: CtfLevelsCountAggregateOutputType | null
    _avg: CtfLevelsAvgAggregateOutputType | null
    _sum: CtfLevelsSumAggregateOutputType | null
    _min: CtfLevelsMinAggregateOutputType | null
    _max: CtfLevelsMaxAggregateOutputType | null
  }

  type GetCtfLevelsGroupByPayload<T extends CtfLevelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CtfLevelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CtfLevelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CtfLevelsGroupByOutputType[P]>
            : GetScalarType<T[P], CtfLevelsGroupByOutputType[P]>
        }
      >
    >


  export type CtfLevelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    password?: boolean
    levelNo?: boolean
    ctfName?: boolean
    id?: boolean
    uniqueId?: boolean
    goal?: boolean
    links?: boolean
    description?: boolean
    commands?: boolean
    hints?: boolean
    expectedOutput?: boolean
    difficulty?: boolean
    category?: boolean
    estimatedTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    files?: boolean
    credentials?: boolean | CtfLevels$credentialsArgs<ExtArgs>
  }, ExtArgs["result"]["ctfLevels"]>

  export type CtfLevelsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    password?: boolean
    levelNo?: boolean
    ctfName?: boolean
    id?: boolean
    uniqueId?: boolean
    goal?: boolean
    links?: boolean
    description?: boolean
    commands?: boolean
    hints?: boolean
    expectedOutput?: boolean
    difficulty?: boolean
    category?: boolean
    estimatedTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    files?: boolean
  }, ExtArgs["result"]["ctfLevels"]>

  export type CtfLevelsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    password?: boolean
    levelNo?: boolean
    ctfName?: boolean
    id?: boolean
    uniqueId?: boolean
    goal?: boolean
    links?: boolean
    description?: boolean
    commands?: boolean
    hints?: boolean
    expectedOutput?: boolean
    difficulty?: boolean
    category?: boolean
    estimatedTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    files?: boolean
  }, ExtArgs["result"]["ctfLevels"]>

  export type CtfLevelsSelectScalar = {
    password?: boolean
    levelNo?: boolean
    ctfName?: boolean
    id?: boolean
    uniqueId?: boolean
    goal?: boolean
    links?: boolean
    description?: boolean
    commands?: boolean
    hints?: boolean
    expectedOutput?: boolean
    difficulty?: boolean
    category?: boolean
    estimatedTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    files?: boolean
  }

  export type CtfLevelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"password" | "levelNo" | "ctfName" | "id" | "uniqueId" | "goal" | "links" | "description" | "commands" | "hints" | "expectedOutput" | "difficulty" | "category" | "estimatedTime" | "createdAt" | "updatedAt" | "files", ExtArgs["result"]["ctfLevels"]>
  export type CtfLevelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credentials?: boolean | CtfLevels$credentialsArgs<ExtArgs>
  }
  export type CtfLevelsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CtfLevelsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CtfLevelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CtfLevels"
    objects: {
      credentials: Prisma.$CredentialsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      password: string
      levelNo: number
      ctfName: string
      id: string
      uniqueId: string
      goal: string
      links: string[]
      description: string
      commands: string[]
      hints: string[]
      expectedOutput: string | null
      difficulty: $Enums.Difficulty
      category: $Enums.Category
      estimatedTime: string
      createdAt: Date
      updatedAt: Date
      files: string | null
    }, ExtArgs["result"]["ctfLevels"]>
    composites: {}
  }

  type CtfLevelsGetPayload<S extends boolean | null | undefined | CtfLevelsDefaultArgs> = $Result.GetResult<Prisma.$CtfLevelsPayload, S>

  type CtfLevelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CtfLevelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CtfLevelsCountAggregateInputType | true
    }

  export interface CtfLevelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CtfLevels'], meta: { name: 'CtfLevels' } }
    /**
     * Find zero or one CtfLevels that matches the filter.
     * @param {CtfLevelsFindUniqueArgs} args - Arguments to find a CtfLevels
     * @example
     * // Get one CtfLevels
     * const ctfLevels = await prisma.ctfLevels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CtfLevelsFindUniqueArgs>(args: SelectSubset<T, CtfLevelsFindUniqueArgs<ExtArgs>>): Prisma__CtfLevelsClient<$Result.GetResult<Prisma.$CtfLevelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CtfLevels that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CtfLevelsFindUniqueOrThrowArgs} args - Arguments to find a CtfLevels
     * @example
     * // Get one CtfLevels
     * const ctfLevels = await prisma.ctfLevels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CtfLevelsFindUniqueOrThrowArgs>(args: SelectSubset<T, CtfLevelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CtfLevelsClient<$Result.GetResult<Prisma.$CtfLevelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CtfLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfLevelsFindFirstArgs} args - Arguments to find a CtfLevels
     * @example
     * // Get one CtfLevels
     * const ctfLevels = await prisma.ctfLevels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CtfLevelsFindFirstArgs>(args?: SelectSubset<T, CtfLevelsFindFirstArgs<ExtArgs>>): Prisma__CtfLevelsClient<$Result.GetResult<Prisma.$CtfLevelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CtfLevels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfLevelsFindFirstOrThrowArgs} args - Arguments to find a CtfLevels
     * @example
     * // Get one CtfLevels
     * const ctfLevels = await prisma.ctfLevels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CtfLevelsFindFirstOrThrowArgs>(args?: SelectSubset<T, CtfLevelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CtfLevelsClient<$Result.GetResult<Prisma.$CtfLevelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CtfLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfLevelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CtfLevels
     * const ctfLevels = await prisma.ctfLevels.findMany()
     * 
     * // Get first 10 CtfLevels
     * const ctfLevels = await prisma.ctfLevels.findMany({ take: 10 })
     * 
     * // Only select the `password`
     * const ctfLevelsWithPasswordOnly = await prisma.ctfLevels.findMany({ select: { password: true } })
     * 
     */
    findMany<T extends CtfLevelsFindManyArgs>(args?: SelectSubset<T, CtfLevelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CtfLevelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CtfLevels.
     * @param {CtfLevelsCreateArgs} args - Arguments to create a CtfLevels.
     * @example
     * // Create one CtfLevels
     * const CtfLevels = await prisma.ctfLevels.create({
     *   data: {
     *     // ... data to create a CtfLevels
     *   }
     * })
     * 
     */
    create<T extends CtfLevelsCreateArgs>(args: SelectSubset<T, CtfLevelsCreateArgs<ExtArgs>>): Prisma__CtfLevelsClient<$Result.GetResult<Prisma.$CtfLevelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CtfLevels.
     * @param {CtfLevelsCreateManyArgs} args - Arguments to create many CtfLevels.
     * @example
     * // Create many CtfLevels
     * const ctfLevels = await prisma.ctfLevels.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CtfLevelsCreateManyArgs>(args?: SelectSubset<T, CtfLevelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CtfLevels and returns the data saved in the database.
     * @param {CtfLevelsCreateManyAndReturnArgs} args - Arguments to create many CtfLevels.
     * @example
     * // Create many CtfLevels
     * const ctfLevels = await prisma.ctfLevels.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CtfLevels and only return the `password`
     * const ctfLevelsWithPasswordOnly = await prisma.ctfLevels.createManyAndReturn({
     *   select: { password: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CtfLevelsCreateManyAndReturnArgs>(args?: SelectSubset<T, CtfLevelsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CtfLevelsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CtfLevels.
     * @param {CtfLevelsDeleteArgs} args - Arguments to delete one CtfLevels.
     * @example
     * // Delete one CtfLevels
     * const CtfLevels = await prisma.ctfLevels.delete({
     *   where: {
     *     // ... filter to delete one CtfLevels
     *   }
     * })
     * 
     */
    delete<T extends CtfLevelsDeleteArgs>(args: SelectSubset<T, CtfLevelsDeleteArgs<ExtArgs>>): Prisma__CtfLevelsClient<$Result.GetResult<Prisma.$CtfLevelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CtfLevels.
     * @param {CtfLevelsUpdateArgs} args - Arguments to update one CtfLevels.
     * @example
     * // Update one CtfLevels
     * const ctfLevels = await prisma.ctfLevels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CtfLevelsUpdateArgs>(args: SelectSubset<T, CtfLevelsUpdateArgs<ExtArgs>>): Prisma__CtfLevelsClient<$Result.GetResult<Prisma.$CtfLevelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CtfLevels.
     * @param {CtfLevelsDeleteManyArgs} args - Arguments to filter CtfLevels to delete.
     * @example
     * // Delete a few CtfLevels
     * const { count } = await prisma.ctfLevels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CtfLevelsDeleteManyArgs>(args?: SelectSubset<T, CtfLevelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CtfLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfLevelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CtfLevels
     * const ctfLevels = await prisma.ctfLevels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CtfLevelsUpdateManyArgs>(args: SelectSubset<T, CtfLevelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CtfLevels and returns the data updated in the database.
     * @param {CtfLevelsUpdateManyAndReturnArgs} args - Arguments to update many CtfLevels.
     * @example
     * // Update many CtfLevels
     * const ctfLevels = await prisma.ctfLevels.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CtfLevels and only return the `password`
     * const ctfLevelsWithPasswordOnly = await prisma.ctfLevels.updateManyAndReturn({
     *   select: { password: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CtfLevelsUpdateManyAndReturnArgs>(args: SelectSubset<T, CtfLevelsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CtfLevelsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CtfLevels.
     * @param {CtfLevelsUpsertArgs} args - Arguments to update or create a CtfLevels.
     * @example
     * // Update or create a CtfLevels
     * const ctfLevels = await prisma.ctfLevels.upsert({
     *   create: {
     *     // ... data to create a CtfLevels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CtfLevels we want to update
     *   }
     * })
     */
    upsert<T extends CtfLevelsUpsertArgs>(args: SelectSubset<T, CtfLevelsUpsertArgs<ExtArgs>>): Prisma__CtfLevelsClient<$Result.GetResult<Prisma.$CtfLevelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CtfLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfLevelsCountArgs} args - Arguments to filter CtfLevels to count.
     * @example
     * // Count the number of CtfLevels
     * const count = await prisma.ctfLevels.count({
     *   where: {
     *     // ... the filter for the CtfLevels we want to count
     *   }
     * })
    **/
    count<T extends CtfLevelsCountArgs>(
      args?: Subset<T, CtfLevelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CtfLevelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CtfLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfLevelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CtfLevelsAggregateArgs>(args: Subset<T, CtfLevelsAggregateArgs>): Prisma.PrismaPromise<GetCtfLevelsAggregateType<T>>

    /**
     * Group by CtfLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfLevelsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CtfLevelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CtfLevelsGroupByArgs['orderBy'] }
        : { orderBy?: CtfLevelsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CtfLevelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCtfLevelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CtfLevels model
   */
  readonly fields: CtfLevelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CtfLevels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CtfLevelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    credentials<T extends CtfLevels$credentialsArgs<ExtArgs> = {}>(args?: Subset<T, CtfLevels$credentialsArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CtfLevels model
   */
  interface CtfLevelsFieldRefs {
    readonly password: FieldRef<"CtfLevels", 'String'>
    readonly levelNo: FieldRef<"CtfLevels", 'Int'>
    readonly ctfName: FieldRef<"CtfLevels", 'String'>
    readonly id: FieldRef<"CtfLevels", 'String'>
    readonly uniqueId: FieldRef<"CtfLevels", 'String'>
    readonly goal: FieldRef<"CtfLevels", 'String'>
    readonly links: FieldRef<"CtfLevels", 'String[]'>
    readonly description: FieldRef<"CtfLevels", 'String'>
    readonly commands: FieldRef<"CtfLevels", 'String[]'>
    readonly hints: FieldRef<"CtfLevels", 'String[]'>
    readonly expectedOutput: FieldRef<"CtfLevels", 'String'>
    readonly difficulty: FieldRef<"CtfLevels", 'Difficulty'>
    readonly category: FieldRef<"CtfLevels", 'Category'>
    readonly estimatedTime: FieldRef<"CtfLevels", 'String'>
    readonly createdAt: FieldRef<"CtfLevels", 'DateTime'>
    readonly updatedAt: FieldRef<"CtfLevels", 'DateTime'>
    readonly files: FieldRef<"CtfLevels", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CtfLevels findUnique
   */
  export type CtfLevelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfLevels
     */
    select?: CtfLevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfLevels
     */
    omit?: CtfLevelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfLevelsInclude<ExtArgs> | null
    /**
     * Filter, which CtfLevels to fetch.
     */
    where: CtfLevelsWhereUniqueInput
  }

  /**
   * CtfLevels findUniqueOrThrow
   */
  export type CtfLevelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfLevels
     */
    select?: CtfLevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfLevels
     */
    omit?: CtfLevelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfLevelsInclude<ExtArgs> | null
    /**
     * Filter, which CtfLevels to fetch.
     */
    where: CtfLevelsWhereUniqueInput
  }

  /**
   * CtfLevels findFirst
   */
  export type CtfLevelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfLevels
     */
    select?: CtfLevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfLevels
     */
    omit?: CtfLevelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfLevelsInclude<ExtArgs> | null
    /**
     * Filter, which CtfLevels to fetch.
     */
    where?: CtfLevelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CtfLevels to fetch.
     */
    orderBy?: CtfLevelsOrderByWithRelationInput | CtfLevelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CtfLevels.
     */
    cursor?: CtfLevelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CtfLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CtfLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CtfLevels.
     */
    distinct?: CtfLevelsScalarFieldEnum | CtfLevelsScalarFieldEnum[]
  }

  /**
   * CtfLevels findFirstOrThrow
   */
  export type CtfLevelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfLevels
     */
    select?: CtfLevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfLevels
     */
    omit?: CtfLevelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfLevelsInclude<ExtArgs> | null
    /**
     * Filter, which CtfLevels to fetch.
     */
    where?: CtfLevelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CtfLevels to fetch.
     */
    orderBy?: CtfLevelsOrderByWithRelationInput | CtfLevelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CtfLevels.
     */
    cursor?: CtfLevelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CtfLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CtfLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CtfLevels.
     */
    distinct?: CtfLevelsScalarFieldEnum | CtfLevelsScalarFieldEnum[]
  }

  /**
   * CtfLevels findMany
   */
  export type CtfLevelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfLevels
     */
    select?: CtfLevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfLevels
     */
    omit?: CtfLevelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfLevelsInclude<ExtArgs> | null
    /**
     * Filter, which CtfLevels to fetch.
     */
    where?: CtfLevelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CtfLevels to fetch.
     */
    orderBy?: CtfLevelsOrderByWithRelationInput | CtfLevelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CtfLevels.
     */
    cursor?: CtfLevelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CtfLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CtfLevels.
     */
    skip?: number
    distinct?: CtfLevelsScalarFieldEnum | CtfLevelsScalarFieldEnum[]
  }

  /**
   * CtfLevels create
   */
  export type CtfLevelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfLevels
     */
    select?: CtfLevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfLevels
     */
    omit?: CtfLevelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfLevelsInclude<ExtArgs> | null
    /**
     * The data needed to create a CtfLevels.
     */
    data: XOR<CtfLevelsCreateInput, CtfLevelsUncheckedCreateInput>
  }

  /**
   * CtfLevels createMany
   */
  export type CtfLevelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CtfLevels.
     */
    data: CtfLevelsCreateManyInput | CtfLevelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CtfLevels createManyAndReturn
   */
  export type CtfLevelsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfLevels
     */
    select?: CtfLevelsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CtfLevels
     */
    omit?: CtfLevelsOmit<ExtArgs> | null
    /**
     * The data used to create many CtfLevels.
     */
    data: CtfLevelsCreateManyInput | CtfLevelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CtfLevels update
   */
  export type CtfLevelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfLevels
     */
    select?: CtfLevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfLevels
     */
    omit?: CtfLevelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfLevelsInclude<ExtArgs> | null
    /**
     * The data needed to update a CtfLevels.
     */
    data: XOR<CtfLevelsUpdateInput, CtfLevelsUncheckedUpdateInput>
    /**
     * Choose, which CtfLevels to update.
     */
    where: CtfLevelsWhereUniqueInput
  }

  /**
   * CtfLevels updateMany
   */
  export type CtfLevelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CtfLevels.
     */
    data: XOR<CtfLevelsUpdateManyMutationInput, CtfLevelsUncheckedUpdateManyInput>
    /**
     * Filter which CtfLevels to update
     */
    where?: CtfLevelsWhereInput
    /**
     * Limit how many CtfLevels to update.
     */
    limit?: number
  }

  /**
   * CtfLevels updateManyAndReturn
   */
  export type CtfLevelsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfLevels
     */
    select?: CtfLevelsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CtfLevels
     */
    omit?: CtfLevelsOmit<ExtArgs> | null
    /**
     * The data used to update CtfLevels.
     */
    data: XOR<CtfLevelsUpdateManyMutationInput, CtfLevelsUncheckedUpdateManyInput>
    /**
     * Filter which CtfLevels to update
     */
    where?: CtfLevelsWhereInput
    /**
     * Limit how many CtfLevels to update.
     */
    limit?: number
  }

  /**
   * CtfLevels upsert
   */
  export type CtfLevelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfLevels
     */
    select?: CtfLevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfLevels
     */
    omit?: CtfLevelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfLevelsInclude<ExtArgs> | null
    /**
     * The filter to search for the CtfLevels to update in case it exists.
     */
    where: CtfLevelsWhereUniqueInput
    /**
     * In case the CtfLevels found by the `where` argument doesn't exist, create a new CtfLevels with this data.
     */
    create: XOR<CtfLevelsCreateInput, CtfLevelsUncheckedCreateInput>
    /**
     * In case the CtfLevels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CtfLevelsUpdateInput, CtfLevelsUncheckedUpdateInput>
  }

  /**
   * CtfLevels delete
   */
  export type CtfLevelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfLevels
     */
    select?: CtfLevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfLevels
     */
    omit?: CtfLevelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfLevelsInclude<ExtArgs> | null
    /**
     * Filter which CtfLevels to delete.
     */
    where: CtfLevelsWhereUniqueInput
  }

  /**
   * CtfLevels deleteMany
   */
  export type CtfLevelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CtfLevels to delete
     */
    where?: CtfLevelsWhereInput
    /**
     * Limit how many CtfLevels to delete.
     */
    limit?: number
  }

  /**
   * CtfLevels.credentials
   */
  export type CtfLevels$credentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    where?: CredentialsWhereInput
  }

  /**
   * CtfLevels without action
   */
  export type CtfLevelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfLevels
     */
    select?: CtfLevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfLevels
     */
    omit?: CtfLevelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfLevelsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CtfClaimedScalarFieldEnum: {
    id: 'id',
    ctfProgressId: 'ctfProgressId',
    levelNo: 'levelNo',
    password: 'password'
  };

  export type CtfClaimedScalarFieldEnum = (typeof CtfClaimedScalarFieldEnum)[keyof typeof CtfClaimedScalarFieldEnum]


  export const SkillsScalarFieldEnum: {
    id: 'id',
    category: 'category',
    uniqueId: 'uniqueId',
    username: 'username'
  };

  export type SkillsScalarFieldEnum = (typeof SkillsScalarFieldEnum)[keyof typeof SkillsScalarFieldEnum]


  export const CtfProgressScalarFieldEnum: {
    id: 'id',
    ctfName: 'ctfName',
    username: 'username'
  };

  export type CtfProgressScalarFieldEnum = (typeof CtfProgressScalarFieldEnum)[keyof typeof CtfProgressScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    LastName: 'LastName',
    username: 'username',
    email: 'email',
    profileImage: 'profileImage',
    bio: 'bio',
    password: 'password',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AuthTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type AuthTokenScalarFieldEnum = (typeof AuthTokenScalarFieldEnum)[keyof typeof AuthTokenScalarFieldEnum]


  export const CTFSScalarFieldEnum: {
    ctfName: 'ctfName',
    totalLevels: 'totalLevels',
    difficulty: 'difficulty',
    imgSrc: 'imgSrc',
    subHeader: 'subHeader',
    title: 'title',
    topic: 'topic',
    totalPlayers: 'totalPlayers'
  };

  export type CTFSScalarFieldEnum = (typeof CTFSScalarFieldEnum)[keyof typeof CTFSScalarFieldEnum]


  export const CredentialsScalarFieldEnum: {
    ctfLevelUniqueId: 'ctfLevelUniqueId',
    host: 'host',
    username: 'username',
    password: 'password',
    Port: 'Port'
  };

  export type CredentialsScalarFieldEnum = (typeof CredentialsScalarFieldEnum)[keyof typeof CredentialsScalarFieldEnum]


  export const CtfLevelsScalarFieldEnum: {
    password: 'password',
    levelNo: 'levelNo',
    ctfName: 'ctfName',
    id: 'id',
    uniqueId: 'uniqueId',
    goal: 'goal',
    links: 'links',
    description: 'description',
    commands: 'commands',
    hints: 'hints',
    expectedOutput: 'expectedOutput',
    difficulty: 'difficulty',
    category: 'category',
    estimatedTime: 'estimatedTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    files: 'files'
  };

  export type CtfLevelsScalarFieldEnum = (typeof CtfLevelsScalarFieldEnum)[keyof typeof CtfLevelsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ctfClaimedWhereInput = {
    AND?: ctfClaimedWhereInput | ctfClaimedWhereInput[]
    OR?: ctfClaimedWhereInput[]
    NOT?: ctfClaimedWhereInput | ctfClaimedWhereInput[]
    id?: StringFilter<"ctfClaimed"> | string
    ctfProgressId?: StringFilter<"ctfClaimed"> | string
    levelNo?: IntFilter<"ctfClaimed"> | number
    password?: StringFilter<"ctfClaimed"> | string
    ctfprogress?: XOR<CtfProgressScalarRelationFilter, CtfProgressWhereInput>
  }

  export type ctfClaimedOrderByWithRelationInput = {
    id?: SortOrder
    ctfProgressId?: SortOrder
    levelNo?: SortOrder
    password?: SortOrder
    ctfprogress?: CtfProgressOrderByWithRelationInput
  }

  export type ctfClaimedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ctfClaimedWhereInput | ctfClaimedWhereInput[]
    OR?: ctfClaimedWhereInput[]
    NOT?: ctfClaimedWhereInput | ctfClaimedWhereInput[]
    ctfProgressId?: StringFilter<"ctfClaimed"> | string
    levelNo?: IntFilter<"ctfClaimed"> | number
    password?: StringFilter<"ctfClaimed"> | string
    ctfprogress?: XOR<CtfProgressScalarRelationFilter, CtfProgressWhereInput>
  }, "id" | "id">

  export type ctfClaimedOrderByWithAggregationInput = {
    id?: SortOrder
    ctfProgressId?: SortOrder
    levelNo?: SortOrder
    password?: SortOrder
    _count?: ctfClaimedCountOrderByAggregateInput
    _avg?: ctfClaimedAvgOrderByAggregateInput
    _max?: ctfClaimedMaxOrderByAggregateInput
    _min?: ctfClaimedMinOrderByAggregateInput
    _sum?: ctfClaimedSumOrderByAggregateInput
  }

  export type ctfClaimedScalarWhereWithAggregatesInput = {
    AND?: ctfClaimedScalarWhereWithAggregatesInput | ctfClaimedScalarWhereWithAggregatesInput[]
    OR?: ctfClaimedScalarWhereWithAggregatesInput[]
    NOT?: ctfClaimedScalarWhereWithAggregatesInput | ctfClaimedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ctfClaimed"> | string
    ctfProgressId?: StringWithAggregatesFilter<"ctfClaimed"> | string
    levelNo?: IntWithAggregatesFilter<"ctfClaimed"> | number
    password?: StringWithAggregatesFilter<"ctfClaimed"> | string
  }

  export type SkillsWhereInput = {
    AND?: SkillsWhereInput | SkillsWhereInput[]
    OR?: SkillsWhereInput[]
    NOT?: SkillsWhereInput | SkillsWhereInput[]
    id?: StringFilter<"Skills"> | string
    category?: EnumCategoryFilter<"Skills"> | $Enums.Category
    uniqueId?: StringFilter<"Skills"> | string
    username?: StringFilter<"Skills"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SkillsOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    uniqueId?: SortOrder
    username?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SkillsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username_category?: SkillsUsernameCategoryCompoundUniqueInput
    AND?: SkillsWhereInput | SkillsWhereInput[]
    OR?: SkillsWhereInput[]
    NOT?: SkillsWhereInput | SkillsWhereInput[]
    category?: EnumCategoryFilter<"Skills"> | $Enums.Category
    uniqueId?: StringFilter<"Skills"> | string
    username?: StringFilter<"Skills"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "username_category">

  export type SkillsOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    uniqueId?: SortOrder
    username?: SortOrder
    _count?: SkillsCountOrderByAggregateInput
    _max?: SkillsMaxOrderByAggregateInput
    _min?: SkillsMinOrderByAggregateInput
  }

  export type SkillsScalarWhereWithAggregatesInput = {
    AND?: SkillsScalarWhereWithAggregatesInput | SkillsScalarWhereWithAggregatesInput[]
    OR?: SkillsScalarWhereWithAggregatesInput[]
    NOT?: SkillsScalarWhereWithAggregatesInput | SkillsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skills"> | string
    category?: EnumCategoryWithAggregatesFilter<"Skills"> | $Enums.Category
    uniqueId?: StringWithAggregatesFilter<"Skills"> | string
    username?: StringWithAggregatesFilter<"Skills"> | string
  }

  export type CtfProgressWhereInput = {
    AND?: CtfProgressWhereInput | CtfProgressWhereInput[]
    OR?: CtfProgressWhereInput[]
    NOT?: CtfProgressWhereInput | CtfProgressWhereInput[]
    id?: StringFilter<"CtfProgress"> | string
    ctfName?: StringFilter<"CtfProgress"> | string
    username?: StringFilter<"CtfProgress"> | string
    ctfClaimeds?: CtfClaimedListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CtfProgressOrderByWithRelationInput = {
    id?: SortOrder
    ctfName?: SortOrder
    username?: SortOrder
    ctfClaimeds?: ctfClaimedOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type CtfProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username_ctfName?: CtfProgressUsernameCtfNameCompoundUniqueInput
    AND?: CtfProgressWhereInput | CtfProgressWhereInput[]
    OR?: CtfProgressWhereInput[]
    NOT?: CtfProgressWhereInput | CtfProgressWhereInput[]
    ctfName?: StringFilter<"CtfProgress"> | string
    username?: StringFilter<"CtfProgress"> | string
    ctfClaimeds?: CtfClaimedListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "username_ctfName">

  export type CtfProgressOrderByWithAggregationInput = {
    id?: SortOrder
    ctfName?: SortOrder
    username?: SortOrder
    _count?: CtfProgressCountOrderByAggregateInput
    _max?: CtfProgressMaxOrderByAggregateInput
    _min?: CtfProgressMinOrderByAggregateInput
  }

  export type CtfProgressScalarWhereWithAggregatesInput = {
    AND?: CtfProgressScalarWhereWithAggregatesInput | CtfProgressScalarWhereWithAggregatesInput[]
    OR?: CtfProgressScalarWhereWithAggregatesInput[]
    NOT?: CtfProgressScalarWhereWithAggregatesInput | CtfProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CtfProgress"> | string
    ctfName?: StringWithAggregatesFilter<"CtfProgress"> | string
    username?: StringWithAggregatesFilter<"CtfProgress"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    LastName?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tokens?: AuthTokenListRelationFilter
    ctfsProgress?: CtfProgressListRelationFilter
    skills?: SkillsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    LastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    password?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tokens?: AuthTokenOrderByRelationAggregateInput
    ctfsProgress?: CtfProgressOrderByRelationAggregateInput
    skills?: SkillsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    resetToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    LastName?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tokens?: AuthTokenListRelationFilter
    ctfsProgress?: CtfProgressListRelationFilter
    skills?: SkillsListRelationFilter
  }, "id" | "username" | "email" | "resetToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    LastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    password?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    LastName?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AuthTokenWhereInput = {
    AND?: AuthTokenWhereInput | AuthTokenWhereInput[]
    OR?: AuthTokenWhereInput[]
    NOT?: AuthTokenWhereInput | AuthTokenWhereInput[]
    id?: StringFilter<"AuthToken"> | string
    token?: StringFilter<"AuthToken"> | string
    expiresAt?: DateTimeFilter<"AuthToken"> | Date | string
    createdAt?: DateTimeFilter<"AuthToken"> | Date | string
    userId?: StringFilter<"AuthToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuthTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuthTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: AuthTokenWhereInput | AuthTokenWhereInput[]
    OR?: AuthTokenWhereInput[]
    NOT?: AuthTokenWhereInput | AuthTokenWhereInput[]
    expiresAt?: DateTimeFilter<"AuthToken"> | Date | string
    createdAt?: DateTimeFilter<"AuthToken"> | Date | string
    userId?: StringFilter<"AuthToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type AuthTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: AuthTokenCountOrderByAggregateInput
    _max?: AuthTokenMaxOrderByAggregateInput
    _min?: AuthTokenMinOrderByAggregateInput
  }

  export type AuthTokenScalarWhereWithAggregatesInput = {
    AND?: AuthTokenScalarWhereWithAggregatesInput | AuthTokenScalarWhereWithAggregatesInput[]
    OR?: AuthTokenScalarWhereWithAggregatesInput[]
    NOT?: AuthTokenScalarWhereWithAggregatesInput | AuthTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthToken"> | string
    token?: StringWithAggregatesFilter<"AuthToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"AuthToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"AuthToken"> | Date | string
    userId?: StringWithAggregatesFilter<"AuthToken"> | string
  }

  export type CTFSWhereInput = {
    AND?: CTFSWhereInput | CTFSWhereInput[]
    OR?: CTFSWhereInput[]
    NOT?: CTFSWhereInput | CTFSWhereInput[]
    ctfName?: StringFilter<"CTFS"> | string
    totalLevels?: IntFilter<"CTFS"> | number
    difficulty?: StringFilter<"CTFS"> | string
    imgSrc?: StringFilter<"CTFS"> | string
    subHeader?: StringFilter<"CTFS"> | string
    title?: StringFilter<"CTFS"> | string
    topic?: StringFilter<"CTFS"> | string
    totalPlayers?: IntFilter<"CTFS"> | number
  }

  export type CTFSOrderByWithRelationInput = {
    ctfName?: SortOrder
    totalLevels?: SortOrder
    difficulty?: SortOrder
    imgSrc?: SortOrder
    subHeader?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    totalPlayers?: SortOrder
  }

  export type CTFSWhereUniqueInput = Prisma.AtLeast<{
    ctfName?: string
    AND?: CTFSWhereInput | CTFSWhereInput[]
    OR?: CTFSWhereInput[]
    NOT?: CTFSWhereInput | CTFSWhereInput[]
    totalLevels?: IntFilter<"CTFS"> | number
    difficulty?: StringFilter<"CTFS"> | string
    imgSrc?: StringFilter<"CTFS"> | string
    subHeader?: StringFilter<"CTFS"> | string
    title?: StringFilter<"CTFS"> | string
    topic?: StringFilter<"CTFS"> | string
    totalPlayers?: IntFilter<"CTFS"> | number
  }, "ctfName">

  export type CTFSOrderByWithAggregationInput = {
    ctfName?: SortOrder
    totalLevels?: SortOrder
    difficulty?: SortOrder
    imgSrc?: SortOrder
    subHeader?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    totalPlayers?: SortOrder
    _count?: CTFSCountOrderByAggregateInput
    _avg?: CTFSAvgOrderByAggregateInput
    _max?: CTFSMaxOrderByAggregateInput
    _min?: CTFSMinOrderByAggregateInput
    _sum?: CTFSSumOrderByAggregateInput
  }

  export type CTFSScalarWhereWithAggregatesInput = {
    AND?: CTFSScalarWhereWithAggregatesInput | CTFSScalarWhereWithAggregatesInput[]
    OR?: CTFSScalarWhereWithAggregatesInput[]
    NOT?: CTFSScalarWhereWithAggregatesInput | CTFSScalarWhereWithAggregatesInput[]
    ctfName?: StringWithAggregatesFilter<"CTFS"> | string
    totalLevels?: IntWithAggregatesFilter<"CTFS"> | number
    difficulty?: StringWithAggregatesFilter<"CTFS"> | string
    imgSrc?: StringWithAggregatesFilter<"CTFS"> | string
    subHeader?: StringWithAggregatesFilter<"CTFS"> | string
    title?: StringWithAggregatesFilter<"CTFS"> | string
    topic?: StringWithAggregatesFilter<"CTFS"> | string
    totalPlayers?: IntWithAggregatesFilter<"CTFS"> | number
  }

  export type CredentialsWhereInput = {
    AND?: CredentialsWhereInput | CredentialsWhereInput[]
    OR?: CredentialsWhereInput[]
    NOT?: CredentialsWhereInput | CredentialsWhereInput[]
    ctfLevelUniqueId?: StringFilter<"Credentials"> | string
    host?: StringFilter<"Credentials"> | string
    username?: StringFilter<"Credentials"> | string
    password?: StringNullableFilter<"Credentials"> | string | null
    Port?: IntFilter<"Credentials"> | number
    ctflevel?: XOR<CtfLevelsScalarRelationFilter, CtfLevelsWhereInput>
  }

  export type CredentialsOrderByWithRelationInput = {
    ctfLevelUniqueId?: SortOrder
    host?: SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    Port?: SortOrder
    ctflevel?: CtfLevelsOrderByWithRelationInput
  }

  export type CredentialsWhereUniqueInput = Prisma.AtLeast<{
    ctfLevelUniqueId?: string
    AND?: CredentialsWhereInput | CredentialsWhereInput[]
    OR?: CredentialsWhereInput[]
    NOT?: CredentialsWhereInput | CredentialsWhereInput[]
    host?: StringFilter<"Credentials"> | string
    username?: StringFilter<"Credentials"> | string
    password?: StringNullableFilter<"Credentials"> | string | null
    Port?: IntFilter<"Credentials"> | number
    ctflevel?: XOR<CtfLevelsScalarRelationFilter, CtfLevelsWhereInput>
  }, "ctfLevelUniqueId">

  export type CredentialsOrderByWithAggregationInput = {
    ctfLevelUniqueId?: SortOrder
    host?: SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    Port?: SortOrder
    _count?: CredentialsCountOrderByAggregateInput
    _avg?: CredentialsAvgOrderByAggregateInput
    _max?: CredentialsMaxOrderByAggregateInput
    _min?: CredentialsMinOrderByAggregateInput
    _sum?: CredentialsSumOrderByAggregateInput
  }

  export type CredentialsScalarWhereWithAggregatesInput = {
    AND?: CredentialsScalarWhereWithAggregatesInput | CredentialsScalarWhereWithAggregatesInput[]
    OR?: CredentialsScalarWhereWithAggregatesInput[]
    NOT?: CredentialsScalarWhereWithAggregatesInput | CredentialsScalarWhereWithAggregatesInput[]
    ctfLevelUniqueId?: StringWithAggregatesFilter<"Credentials"> | string
    host?: StringWithAggregatesFilter<"Credentials"> | string
    username?: StringWithAggregatesFilter<"Credentials"> | string
    password?: StringNullableWithAggregatesFilter<"Credentials"> | string | null
    Port?: IntWithAggregatesFilter<"Credentials"> | number
  }

  export type CtfLevelsWhereInput = {
    AND?: CtfLevelsWhereInput | CtfLevelsWhereInput[]
    OR?: CtfLevelsWhereInput[]
    NOT?: CtfLevelsWhereInput | CtfLevelsWhereInput[]
    password?: StringFilter<"CtfLevels"> | string
    levelNo?: IntFilter<"CtfLevels"> | number
    ctfName?: StringFilter<"CtfLevels"> | string
    id?: StringFilter<"CtfLevels"> | string
    uniqueId?: StringFilter<"CtfLevels"> | string
    goal?: StringFilter<"CtfLevels"> | string
    links?: StringNullableListFilter<"CtfLevels">
    description?: StringFilter<"CtfLevels"> | string
    commands?: StringNullableListFilter<"CtfLevels">
    hints?: StringNullableListFilter<"CtfLevels">
    expectedOutput?: StringNullableFilter<"CtfLevels"> | string | null
    difficulty?: EnumDifficultyFilter<"CtfLevels"> | $Enums.Difficulty
    category?: EnumCategoryFilter<"CtfLevels"> | $Enums.Category
    estimatedTime?: StringFilter<"CtfLevels"> | string
    createdAt?: DateTimeFilter<"CtfLevels"> | Date | string
    updatedAt?: DateTimeFilter<"CtfLevels"> | Date | string
    files?: StringNullableFilter<"CtfLevels"> | string | null
    credentials?: XOR<CredentialsNullableScalarRelationFilter, CredentialsWhereInput> | null
  }

  export type CtfLevelsOrderByWithRelationInput = {
    password?: SortOrder
    levelNo?: SortOrder
    ctfName?: SortOrder
    id?: SortOrder
    uniqueId?: SortOrder
    goal?: SortOrder
    links?: SortOrder
    description?: SortOrder
    commands?: SortOrder
    hints?: SortOrder
    expectedOutput?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    estimatedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    files?: SortOrderInput | SortOrder
    credentials?: CredentialsOrderByWithRelationInput
  }

  export type CtfLevelsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uniqueId?: string
    AND?: CtfLevelsWhereInput | CtfLevelsWhereInput[]
    OR?: CtfLevelsWhereInput[]
    NOT?: CtfLevelsWhereInput | CtfLevelsWhereInput[]
    password?: StringFilter<"CtfLevels"> | string
    levelNo?: IntFilter<"CtfLevels"> | number
    ctfName?: StringFilter<"CtfLevels"> | string
    goal?: StringFilter<"CtfLevels"> | string
    links?: StringNullableListFilter<"CtfLevels">
    description?: StringFilter<"CtfLevels"> | string
    commands?: StringNullableListFilter<"CtfLevels">
    hints?: StringNullableListFilter<"CtfLevels">
    expectedOutput?: StringNullableFilter<"CtfLevels"> | string | null
    difficulty?: EnumDifficultyFilter<"CtfLevels"> | $Enums.Difficulty
    category?: EnumCategoryFilter<"CtfLevels"> | $Enums.Category
    estimatedTime?: StringFilter<"CtfLevels"> | string
    createdAt?: DateTimeFilter<"CtfLevels"> | Date | string
    updatedAt?: DateTimeFilter<"CtfLevels"> | Date | string
    files?: StringNullableFilter<"CtfLevels"> | string | null
    credentials?: XOR<CredentialsNullableScalarRelationFilter, CredentialsWhereInput> | null
  }, "id" | "uniqueId">

  export type CtfLevelsOrderByWithAggregationInput = {
    password?: SortOrder
    levelNo?: SortOrder
    ctfName?: SortOrder
    id?: SortOrder
    uniqueId?: SortOrder
    goal?: SortOrder
    links?: SortOrder
    description?: SortOrder
    commands?: SortOrder
    hints?: SortOrder
    expectedOutput?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    estimatedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    files?: SortOrderInput | SortOrder
    _count?: CtfLevelsCountOrderByAggregateInput
    _avg?: CtfLevelsAvgOrderByAggregateInput
    _max?: CtfLevelsMaxOrderByAggregateInput
    _min?: CtfLevelsMinOrderByAggregateInput
    _sum?: CtfLevelsSumOrderByAggregateInput
  }

  export type CtfLevelsScalarWhereWithAggregatesInput = {
    AND?: CtfLevelsScalarWhereWithAggregatesInput | CtfLevelsScalarWhereWithAggregatesInput[]
    OR?: CtfLevelsScalarWhereWithAggregatesInput[]
    NOT?: CtfLevelsScalarWhereWithAggregatesInput | CtfLevelsScalarWhereWithAggregatesInput[]
    password?: StringWithAggregatesFilter<"CtfLevels"> | string
    levelNo?: IntWithAggregatesFilter<"CtfLevels"> | number
    ctfName?: StringWithAggregatesFilter<"CtfLevels"> | string
    id?: StringWithAggregatesFilter<"CtfLevels"> | string
    uniqueId?: StringWithAggregatesFilter<"CtfLevels"> | string
    goal?: StringWithAggregatesFilter<"CtfLevels"> | string
    links?: StringNullableListFilter<"CtfLevels">
    description?: StringWithAggregatesFilter<"CtfLevels"> | string
    commands?: StringNullableListFilter<"CtfLevels">
    hints?: StringNullableListFilter<"CtfLevels">
    expectedOutput?: StringNullableWithAggregatesFilter<"CtfLevels"> | string | null
    difficulty?: EnumDifficultyWithAggregatesFilter<"CtfLevels"> | $Enums.Difficulty
    category?: EnumCategoryWithAggregatesFilter<"CtfLevels"> | $Enums.Category
    estimatedTime?: StringWithAggregatesFilter<"CtfLevels"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CtfLevels"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CtfLevels"> | Date | string
    files?: StringNullableWithAggregatesFilter<"CtfLevels"> | string | null
  }

  export type ctfClaimedCreateInput = {
    id?: string
    levelNo: number
    password: string
    ctfprogress: CtfProgressCreateNestedOneWithoutCtfClaimedsInput
  }

  export type ctfClaimedUncheckedCreateInput = {
    id?: string
    ctfProgressId: string
    levelNo: number
    password: string
  }

  export type ctfClaimedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelNo?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    ctfprogress?: CtfProgressUpdateOneRequiredWithoutCtfClaimedsNestedInput
  }

  export type ctfClaimedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ctfProgressId?: StringFieldUpdateOperationsInput | string
    levelNo?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ctfClaimedCreateManyInput = {
    id?: string
    ctfProgressId: string
    levelNo: number
    password: string
  }

  export type ctfClaimedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelNo?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ctfClaimedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ctfProgressId?: StringFieldUpdateOperationsInput | string
    levelNo?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type SkillsCreateInput = {
    id?: string
    category: $Enums.Category
    uniqueId: string
    user: UserCreateNestedOneWithoutSkillsInput
  }

  export type SkillsUncheckedCreateInput = {
    id?: string
    category: $Enums.Category
    uniqueId: string
    username: string
  }

  export type SkillsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    uniqueId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type SkillsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    uniqueId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type SkillsCreateManyInput = {
    id?: string
    category: $Enums.Category
    uniqueId: string
    username: string
  }

  export type SkillsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    uniqueId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    uniqueId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type CtfProgressCreateInput = {
    id?: string
    ctfName: string
    ctfClaimeds?: ctfClaimedCreateNestedManyWithoutCtfprogressInput
    user: UserCreateNestedOneWithoutCtfsProgressInput
  }

  export type CtfProgressUncheckedCreateInput = {
    id?: string
    ctfName: string
    username: string
    ctfClaimeds?: ctfClaimedUncheckedCreateNestedManyWithoutCtfprogressInput
  }

  export type CtfProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ctfName?: StringFieldUpdateOperationsInput | string
    ctfClaimeds?: ctfClaimedUpdateManyWithoutCtfprogressNestedInput
    user?: UserUpdateOneRequiredWithoutCtfsProgressNestedInput
  }

  export type CtfProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ctfName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    ctfClaimeds?: ctfClaimedUncheckedUpdateManyWithoutCtfprogressNestedInput
  }

  export type CtfProgressCreateManyInput = {
    id?: string
    ctfName: string
    username: string
  }

  export type CtfProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ctfName?: StringFieldUpdateOperationsInput | string
  }

  export type CtfProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ctfName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    LastName: string
    username: string
    email: string
    profileImage?: string | null
    bio?: string | null
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: AuthTokenCreateNestedManyWithoutUserInput
    ctfsProgress?: CtfProgressCreateNestedManyWithoutUserInput
    skills?: SkillsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    LastName: string
    username: string
    email: string
    profileImage?: string | null
    bio?: string | null
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: AuthTokenUncheckedCreateNestedManyWithoutUserInput
    ctfsProgress?: CtfProgressUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: AuthTokenUpdateManyWithoutUserNestedInput
    ctfsProgress?: CtfProgressUpdateManyWithoutUserNestedInput
    skills?: SkillsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: AuthTokenUncheckedUpdateManyWithoutUserNestedInput
    ctfsProgress?: CtfProgressUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    LastName: string
    username: string
    email: string
    profileImage?: string | null
    bio?: string | null
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type AuthTokenUncheckedCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    userId: string
  }

  export type AuthTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type AuthTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthTokenCreateManyInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    userId: string
  }

  export type AuthTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CTFSCreateInput = {
    ctfName: string
    totalLevels: number
    difficulty: string
    imgSrc: string
    subHeader: string
    title: string
    topic: string
    totalPlayers: number
  }

  export type CTFSUncheckedCreateInput = {
    ctfName: string
    totalLevels: number
    difficulty: string
    imgSrc: string
    subHeader: string
    title: string
    topic: string
    totalPlayers: number
  }

  export type CTFSUpdateInput = {
    ctfName?: StringFieldUpdateOperationsInput | string
    totalLevels?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    imgSrc?: StringFieldUpdateOperationsInput | string
    subHeader?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    totalPlayers?: IntFieldUpdateOperationsInput | number
  }

  export type CTFSUncheckedUpdateInput = {
    ctfName?: StringFieldUpdateOperationsInput | string
    totalLevels?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    imgSrc?: StringFieldUpdateOperationsInput | string
    subHeader?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    totalPlayers?: IntFieldUpdateOperationsInput | number
  }

  export type CTFSCreateManyInput = {
    ctfName: string
    totalLevels: number
    difficulty: string
    imgSrc: string
    subHeader: string
    title: string
    topic: string
    totalPlayers: number
  }

  export type CTFSUpdateManyMutationInput = {
    ctfName?: StringFieldUpdateOperationsInput | string
    totalLevels?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    imgSrc?: StringFieldUpdateOperationsInput | string
    subHeader?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    totalPlayers?: IntFieldUpdateOperationsInput | number
  }

  export type CTFSUncheckedUpdateManyInput = {
    ctfName?: StringFieldUpdateOperationsInput | string
    totalLevels?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    imgSrc?: StringFieldUpdateOperationsInput | string
    subHeader?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    totalPlayers?: IntFieldUpdateOperationsInput | number
  }

  export type CredentialsCreateInput = {
    host: string
    username: string
    password?: string | null
    Port: number
    ctflevel: CtfLevelsCreateNestedOneWithoutCredentialsInput
  }

  export type CredentialsUncheckedCreateInput = {
    ctfLevelUniqueId: string
    host: string
    username: string
    password?: string | null
    Port: number
  }

  export type CredentialsUpdateInput = {
    host?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Port?: IntFieldUpdateOperationsInput | number
    ctflevel?: CtfLevelsUpdateOneRequiredWithoutCredentialsNestedInput
  }

  export type CredentialsUncheckedUpdateInput = {
    ctfLevelUniqueId?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Port?: IntFieldUpdateOperationsInput | number
  }

  export type CredentialsCreateManyInput = {
    ctfLevelUniqueId: string
    host: string
    username: string
    password?: string | null
    Port: number
  }

  export type CredentialsUpdateManyMutationInput = {
    host?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Port?: IntFieldUpdateOperationsInput | number
  }

  export type CredentialsUncheckedUpdateManyInput = {
    ctfLevelUniqueId?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Port?: IntFieldUpdateOperationsInput | number
  }

  export type CtfLevelsCreateInput = {
    password: string
    levelNo: number
    ctfName: string
    id?: string
    uniqueId: string
    goal: string
    links?: CtfLevelsCreatelinksInput | string[]
    description: string
    commands?: CtfLevelsCreatecommandsInput | string[]
    hints?: CtfLevelsCreatehintsInput | string[]
    expectedOutput?: string | null
    difficulty: $Enums.Difficulty
    category: $Enums.Category
    estimatedTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: string | null
    credentials?: CredentialsCreateNestedOneWithoutCtflevelInput
  }

  export type CtfLevelsUncheckedCreateInput = {
    password: string
    levelNo: number
    ctfName: string
    id?: string
    uniqueId: string
    goal: string
    links?: CtfLevelsCreatelinksInput | string[]
    description: string
    commands?: CtfLevelsCreatecommandsInput | string[]
    hints?: CtfLevelsCreatehintsInput | string[]
    expectedOutput?: string | null
    difficulty: $Enums.Difficulty
    category: $Enums.Category
    estimatedTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: string | null
    credentials?: CredentialsUncheckedCreateNestedOneWithoutCtflevelInput
  }

  export type CtfLevelsUpdateInput = {
    password?: StringFieldUpdateOperationsInput | string
    levelNo?: IntFieldUpdateOperationsInput | number
    ctfName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    links?: CtfLevelsUpdatelinksInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    commands?: CtfLevelsUpdatecommandsInput | string[]
    hints?: CtfLevelsUpdatehintsInput | string[]
    expectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    estimatedTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: NullableStringFieldUpdateOperationsInput | string | null
    credentials?: CredentialsUpdateOneWithoutCtflevelNestedInput
  }

  export type CtfLevelsUncheckedUpdateInput = {
    password?: StringFieldUpdateOperationsInput | string
    levelNo?: IntFieldUpdateOperationsInput | number
    ctfName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    links?: CtfLevelsUpdatelinksInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    commands?: CtfLevelsUpdatecommandsInput | string[]
    hints?: CtfLevelsUpdatehintsInput | string[]
    expectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    estimatedTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: NullableStringFieldUpdateOperationsInput | string | null
    credentials?: CredentialsUncheckedUpdateOneWithoutCtflevelNestedInput
  }

  export type CtfLevelsCreateManyInput = {
    password: string
    levelNo: number
    ctfName: string
    id?: string
    uniqueId: string
    goal: string
    links?: CtfLevelsCreatelinksInput | string[]
    description: string
    commands?: CtfLevelsCreatecommandsInput | string[]
    hints?: CtfLevelsCreatehintsInput | string[]
    expectedOutput?: string | null
    difficulty: $Enums.Difficulty
    category: $Enums.Category
    estimatedTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: string | null
  }

  export type CtfLevelsUpdateManyMutationInput = {
    password?: StringFieldUpdateOperationsInput | string
    levelNo?: IntFieldUpdateOperationsInput | number
    ctfName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    links?: CtfLevelsUpdatelinksInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    commands?: CtfLevelsUpdatecommandsInput | string[]
    hints?: CtfLevelsUpdatehintsInput | string[]
    expectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    estimatedTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CtfLevelsUncheckedUpdateManyInput = {
    password?: StringFieldUpdateOperationsInput | string
    levelNo?: IntFieldUpdateOperationsInput | number
    ctfName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    links?: CtfLevelsUpdatelinksInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    commands?: CtfLevelsUpdatecommandsInput | string[]
    hints?: CtfLevelsUpdatehintsInput | string[]
    expectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    estimatedTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CtfProgressScalarRelationFilter = {
    is?: CtfProgressWhereInput
    isNot?: CtfProgressWhereInput
  }

  export type ctfClaimedCountOrderByAggregateInput = {
    id?: SortOrder
    ctfProgressId?: SortOrder
    levelNo?: SortOrder
    password?: SortOrder
  }

  export type ctfClaimedAvgOrderByAggregateInput = {
    levelNo?: SortOrder
  }

  export type ctfClaimedMaxOrderByAggregateInput = {
    id?: SortOrder
    ctfProgressId?: SortOrder
    levelNo?: SortOrder
    password?: SortOrder
  }

  export type ctfClaimedMinOrderByAggregateInput = {
    id?: SortOrder
    ctfProgressId?: SortOrder
    levelNo?: SortOrder
    password?: SortOrder
  }

  export type ctfClaimedSumOrderByAggregateInput = {
    levelNo?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SkillsUsernameCategoryCompoundUniqueInput = {
    username: string
    category: $Enums.Category
  }

  export type SkillsCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    uniqueId?: SortOrder
    username?: SortOrder
  }

  export type SkillsMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    uniqueId?: SortOrder
    username?: SortOrder
  }

  export type SkillsMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    uniqueId?: SortOrder
    username?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type CtfClaimedListRelationFilter = {
    every?: ctfClaimedWhereInput
    some?: ctfClaimedWhereInput
    none?: ctfClaimedWhereInput
  }

  export type ctfClaimedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CtfProgressUsernameCtfNameCompoundUniqueInput = {
    username: string
    ctfName: string
  }

  export type CtfProgressCountOrderByAggregateInput = {
    id?: SortOrder
    ctfName?: SortOrder
    username?: SortOrder
  }

  export type CtfProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    ctfName?: SortOrder
    username?: SortOrder
  }

  export type CtfProgressMinOrderByAggregateInput = {
    id?: SortOrder
    ctfName?: SortOrder
    username?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AuthTokenListRelationFilter = {
    every?: AuthTokenWhereInput
    some?: AuthTokenWhereInput
    none?: AuthTokenWhereInput
  }

  export type CtfProgressListRelationFilter = {
    every?: CtfProgressWhereInput
    some?: CtfProgressWhereInput
    none?: CtfProgressWhereInput
  }

  export type SkillsListRelationFilter = {
    every?: SkillsWhereInput
    some?: SkillsWhereInput
    none?: SkillsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuthTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CtfProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    LastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    bio?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    LastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    bio?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    LastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    bio?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AuthTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type AuthTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type AuthTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type CTFSCountOrderByAggregateInput = {
    ctfName?: SortOrder
    totalLevels?: SortOrder
    difficulty?: SortOrder
    imgSrc?: SortOrder
    subHeader?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    totalPlayers?: SortOrder
  }

  export type CTFSAvgOrderByAggregateInput = {
    totalLevels?: SortOrder
    totalPlayers?: SortOrder
  }

  export type CTFSMaxOrderByAggregateInput = {
    ctfName?: SortOrder
    totalLevels?: SortOrder
    difficulty?: SortOrder
    imgSrc?: SortOrder
    subHeader?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    totalPlayers?: SortOrder
  }

  export type CTFSMinOrderByAggregateInput = {
    ctfName?: SortOrder
    totalLevels?: SortOrder
    difficulty?: SortOrder
    imgSrc?: SortOrder
    subHeader?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    totalPlayers?: SortOrder
  }

  export type CTFSSumOrderByAggregateInput = {
    totalLevels?: SortOrder
    totalPlayers?: SortOrder
  }

  export type CtfLevelsScalarRelationFilter = {
    is?: CtfLevelsWhereInput
    isNot?: CtfLevelsWhereInput
  }

  export type CredentialsCountOrderByAggregateInput = {
    ctfLevelUniqueId?: SortOrder
    host?: SortOrder
    username?: SortOrder
    password?: SortOrder
    Port?: SortOrder
  }

  export type CredentialsAvgOrderByAggregateInput = {
    Port?: SortOrder
  }

  export type CredentialsMaxOrderByAggregateInput = {
    ctfLevelUniqueId?: SortOrder
    host?: SortOrder
    username?: SortOrder
    password?: SortOrder
    Port?: SortOrder
  }

  export type CredentialsMinOrderByAggregateInput = {
    ctfLevelUniqueId?: SortOrder
    host?: SortOrder
    username?: SortOrder
    password?: SortOrder
    Port?: SortOrder
  }

  export type CredentialsSumOrderByAggregateInput = {
    Port?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type CredentialsNullableScalarRelationFilter = {
    is?: CredentialsWhereInput | null
    isNot?: CredentialsWhereInput | null
  }

  export type CtfLevelsCountOrderByAggregateInput = {
    password?: SortOrder
    levelNo?: SortOrder
    ctfName?: SortOrder
    id?: SortOrder
    uniqueId?: SortOrder
    goal?: SortOrder
    links?: SortOrder
    description?: SortOrder
    commands?: SortOrder
    hints?: SortOrder
    expectedOutput?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    estimatedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    files?: SortOrder
  }

  export type CtfLevelsAvgOrderByAggregateInput = {
    levelNo?: SortOrder
  }

  export type CtfLevelsMaxOrderByAggregateInput = {
    password?: SortOrder
    levelNo?: SortOrder
    ctfName?: SortOrder
    id?: SortOrder
    uniqueId?: SortOrder
    goal?: SortOrder
    description?: SortOrder
    expectedOutput?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    estimatedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    files?: SortOrder
  }

  export type CtfLevelsMinOrderByAggregateInput = {
    password?: SortOrder
    levelNo?: SortOrder
    ctfName?: SortOrder
    id?: SortOrder
    uniqueId?: SortOrder
    goal?: SortOrder
    description?: SortOrder
    expectedOutput?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    estimatedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    files?: SortOrder
  }

  export type CtfLevelsSumOrderByAggregateInput = {
    levelNo?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type CtfProgressCreateNestedOneWithoutCtfClaimedsInput = {
    create?: XOR<CtfProgressCreateWithoutCtfClaimedsInput, CtfProgressUncheckedCreateWithoutCtfClaimedsInput>
    connectOrCreate?: CtfProgressCreateOrConnectWithoutCtfClaimedsInput
    connect?: CtfProgressWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CtfProgressUpdateOneRequiredWithoutCtfClaimedsNestedInput = {
    create?: XOR<CtfProgressCreateWithoutCtfClaimedsInput, CtfProgressUncheckedCreateWithoutCtfClaimedsInput>
    connectOrCreate?: CtfProgressCreateOrConnectWithoutCtfClaimedsInput
    upsert?: CtfProgressUpsertWithoutCtfClaimedsInput
    connect?: CtfProgressWhereUniqueInput
    update?: XOR<XOR<CtfProgressUpdateToOneWithWhereWithoutCtfClaimedsInput, CtfProgressUpdateWithoutCtfClaimedsInput>, CtfProgressUncheckedUpdateWithoutCtfClaimedsInput>
  }

  export type UserCreateNestedOneWithoutSkillsInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type UserUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    upsert?: UserUpsertWithoutSkillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillsInput, UserUpdateWithoutSkillsInput>, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type ctfClaimedCreateNestedManyWithoutCtfprogressInput = {
    create?: XOR<ctfClaimedCreateWithoutCtfprogressInput, ctfClaimedUncheckedCreateWithoutCtfprogressInput> | ctfClaimedCreateWithoutCtfprogressInput[] | ctfClaimedUncheckedCreateWithoutCtfprogressInput[]
    connectOrCreate?: ctfClaimedCreateOrConnectWithoutCtfprogressInput | ctfClaimedCreateOrConnectWithoutCtfprogressInput[]
    createMany?: ctfClaimedCreateManyCtfprogressInputEnvelope
    connect?: ctfClaimedWhereUniqueInput | ctfClaimedWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCtfsProgressInput = {
    create?: XOR<UserCreateWithoutCtfsProgressInput, UserUncheckedCreateWithoutCtfsProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutCtfsProgressInput
    connect?: UserWhereUniqueInput
  }

  export type ctfClaimedUncheckedCreateNestedManyWithoutCtfprogressInput = {
    create?: XOR<ctfClaimedCreateWithoutCtfprogressInput, ctfClaimedUncheckedCreateWithoutCtfprogressInput> | ctfClaimedCreateWithoutCtfprogressInput[] | ctfClaimedUncheckedCreateWithoutCtfprogressInput[]
    connectOrCreate?: ctfClaimedCreateOrConnectWithoutCtfprogressInput | ctfClaimedCreateOrConnectWithoutCtfprogressInput[]
    createMany?: ctfClaimedCreateManyCtfprogressInputEnvelope
    connect?: ctfClaimedWhereUniqueInput | ctfClaimedWhereUniqueInput[]
  }

  export type ctfClaimedUpdateManyWithoutCtfprogressNestedInput = {
    create?: XOR<ctfClaimedCreateWithoutCtfprogressInput, ctfClaimedUncheckedCreateWithoutCtfprogressInput> | ctfClaimedCreateWithoutCtfprogressInput[] | ctfClaimedUncheckedCreateWithoutCtfprogressInput[]
    connectOrCreate?: ctfClaimedCreateOrConnectWithoutCtfprogressInput | ctfClaimedCreateOrConnectWithoutCtfprogressInput[]
    upsert?: ctfClaimedUpsertWithWhereUniqueWithoutCtfprogressInput | ctfClaimedUpsertWithWhereUniqueWithoutCtfprogressInput[]
    createMany?: ctfClaimedCreateManyCtfprogressInputEnvelope
    set?: ctfClaimedWhereUniqueInput | ctfClaimedWhereUniqueInput[]
    disconnect?: ctfClaimedWhereUniqueInput | ctfClaimedWhereUniqueInput[]
    delete?: ctfClaimedWhereUniqueInput | ctfClaimedWhereUniqueInput[]
    connect?: ctfClaimedWhereUniqueInput | ctfClaimedWhereUniqueInput[]
    update?: ctfClaimedUpdateWithWhereUniqueWithoutCtfprogressInput | ctfClaimedUpdateWithWhereUniqueWithoutCtfprogressInput[]
    updateMany?: ctfClaimedUpdateManyWithWhereWithoutCtfprogressInput | ctfClaimedUpdateManyWithWhereWithoutCtfprogressInput[]
    deleteMany?: ctfClaimedScalarWhereInput | ctfClaimedScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCtfsProgressNestedInput = {
    create?: XOR<UserCreateWithoutCtfsProgressInput, UserUncheckedCreateWithoutCtfsProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutCtfsProgressInput
    upsert?: UserUpsertWithoutCtfsProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCtfsProgressInput, UserUpdateWithoutCtfsProgressInput>, UserUncheckedUpdateWithoutCtfsProgressInput>
  }

  export type ctfClaimedUncheckedUpdateManyWithoutCtfprogressNestedInput = {
    create?: XOR<ctfClaimedCreateWithoutCtfprogressInput, ctfClaimedUncheckedCreateWithoutCtfprogressInput> | ctfClaimedCreateWithoutCtfprogressInput[] | ctfClaimedUncheckedCreateWithoutCtfprogressInput[]
    connectOrCreate?: ctfClaimedCreateOrConnectWithoutCtfprogressInput | ctfClaimedCreateOrConnectWithoutCtfprogressInput[]
    upsert?: ctfClaimedUpsertWithWhereUniqueWithoutCtfprogressInput | ctfClaimedUpsertWithWhereUniqueWithoutCtfprogressInput[]
    createMany?: ctfClaimedCreateManyCtfprogressInputEnvelope
    set?: ctfClaimedWhereUniqueInput | ctfClaimedWhereUniqueInput[]
    disconnect?: ctfClaimedWhereUniqueInput | ctfClaimedWhereUniqueInput[]
    delete?: ctfClaimedWhereUniqueInput | ctfClaimedWhereUniqueInput[]
    connect?: ctfClaimedWhereUniqueInput | ctfClaimedWhereUniqueInput[]
    update?: ctfClaimedUpdateWithWhereUniqueWithoutCtfprogressInput | ctfClaimedUpdateWithWhereUniqueWithoutCtfprogressInput[]
    updateMany?: ctfClaimedUpdateManyWithWhereWithoutCtfprogressInput | ctfClaimedUpdateManyWithWhereWithoutCtfprogressInput[]
    deleteMany?: ctfClaimedScalarWhereInput | ctfClaimedScalarWhereInput[]
  }

  export type AuthTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthTokenCreateWithoutUserInput, AuthTokenUncheckedCreateWithoutUserInput> | AuthTokenCreateWithoutUserInput[] | AuthTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthTokenCreateOrConnectWithoutUserInput | AuthTokenCreateOrConnectWithoutUserInput[]
    createMany?: AuthTokenCreateManyUserInputEnvelope
    connect?: AuthTokenWhereUniqueInput | AuthTokenWhereUniqueInput[]
  }

  export type CtfProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<CtfProgressCreateWithoutUserInput, CtfProgressUncheckedCreateWithoutUserInput> | CtfProgressCreateWithoutUserInput[] | CtfProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CtfProgressCreateOrConnectWithoutUserInput | CtfProgressCreateOrConnectWithoutUserInput[]
    createMany?: CtfProgressCreateManyUserInputEnvelope
    connect?: CtfProgressWhereUniqueInput | CtfProgressWhereUniqueInput[]
  }

  export type SkillsCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillsCreateWithoutUserInput, SkillsUncheckedCreateWithoutUserInput> | SkillsCreateWithoutUserInput[] | SkillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutUserInput | SkillsCreateOrConnectWithoutUserInput[]
    createMany?: SkillsCreateManyUserInputEnvelope
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
  }

  export type AuthTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthTokenCreateWithoutUserInput, AuthTokenUncheckedCreateWithoutUserInput> | AuthTokenCreateWithoutUserInput[] | AuthTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthTokenCreateOrConnectWithoutUserInput | AuthTokenCreateOrConnectWithoutUserInput[]
    createMany?: AuthTokenCreateManyUserInputEnvelope
    connect?: AuthTokenWhereUniqueInput | AuthTokenWhereUniqueInput[]
  }

  export type CtfProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CtfProgressCreateWithoutUserInput, CtfProgressUncheckedCreateWithoutUserInput> | CtfProgressCreateWithoutUserInput[] | CtfProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CtfProgressCreateOrConnectWithoutUserInput | CtfProgressCreateOrConnectWithoutUserInput[]
    createMany?: CtfProgressCreateManyUserInputEnvelope
    connect?: CtfProgressWhereUniqueInput | CtfProgressWhereUniqueInput[]
  }

  export type SkillsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillsCreateWithoutUserInput, SkillsUncheckedCreateWithoutUserInput> | SkillsCreateWithoutUserInput[] | SkillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutUserInput | SkillsCreateOrConnectWithoutUserInput[]
    createMany?: SkillsCreateManyUserInputEnvelope
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuthTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthTokenCreateWithoutUserInput, AuthTokenUncheckedCreateWithoutUserInput> | AuthTokenCreateWithoutUserInput[] | AuthTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthTokenCreateOrConnectWithoutUserInput | AuthTokenCreateOrConnectWithoutUserInput[]
    upsert?: AuthTokenUpsertWithWhereUniqueWithoutUserInput | AuthTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthTokenCreateManyUserInputEnvelope
    set?: AuthTokenWhereUniqueInput | AuthTokenWhereUniqueInput[]
    disconnect?: AuthTokenWhereUniqueInput | AuthTokenWhereUniqueInput[]
    delete?: AuthTokenWhereUniqueInput | AuthTokenWhereUniqueInput[]
    connect?: AuthTokenWhereUniqueInput | AuthTokenWhereUniqueInput[]
    update?: AuthTokenUpdateWithWhereUniqueWithoutUserInput | AuthTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthTokenUpdateManyWithWhereWithoutUserInput | AuthTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthTokenScalarWhereInput | AuthTokenScalarWhereInput[]
  }

  export type CtfProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<CtfProgressCreateWithoutUserInput, CtfProgressUncheckedCreateWithoutUserInput> | CtfProgressCreateWithoutUserInput[] | CtfProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CtfProgressCreateOrConnectWithoutUserInput | CtfProgressCreateOrConnectWithoutUserInput[]
    upsert?: CtfProgressUpsertWithWhereUniqueWithoutUserInput | CtfProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CtfProgressCreateManyUserInputEnvelope
    set?: CtfProgressWhereUniqueInput | CtfProgressWhereUniqueInput[]
    disconnect?: CtfProgressWhereUniqueInput | CtfProgressWhereUniqueInput[]
    delete?: CtfProgressWhereUniqueInput | CtfProgressWhereUniqueInput[]
    connect?: CtfProgressWhereUniqueInput | CtfProgressWhereUniqueInput[]
    update?: CtfProgressUpdateWithWhereUniqueWithoutUserInput | CtfProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CtfProgressUpdateManyWithWhereWithoutUserInput | CtfProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CtfProgressScalarWhereInput | CtfProgressScalarWhereInput[]
  }

  export type SkillsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillsCreateWithoutUserInput, SkillsUncheckedCreateWithoutUserInput> | SkillsCreateWithoutUserInput[] | SkillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutUserInput | SkillsCreateOrConnectWithoutUserInput[]
    upsert?: SkillsUpsertWithWhereUniqueWithoutUserInput | SkillsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillsCreateManyUserInputEnvelope
    set?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    disconnect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    delete?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    update?: SkillsUpdateWithWhereUniqueWithoutUserInput | SkillsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillsUpdateManyWithWhereWithoutUserInput | SkillsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
  }

  export type AuthTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthTokenCreateWithoutUserInput, AuthTokenUncheckedCreateWithoutUserInput> | AuthTokenCreateWithoutUserInput[] | AuthTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthTokenCreateOrConnectWithoutUserInput | AuthTokenCreateOrConnectWithoutUserInput[]
    upsert?: AuthTokenUpsertWithWhereUniqueWithoutUserInput | AuthTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthTokenCreateManyUserInputEnvelope
    set?: AuthTokenWhereUniqueInput | AuthTokenWhereUniqueInput[]
    disconnect?: AuthTokenWhereUniqueInput | AuthTokenWhereUniqueInput[]
    delete?: AuthTokenWhereUniqueInput | AuthTokenWhereUniqueInput[]
    connect?: AuthTokenWhereUniqueInput | AuthTokenWhereUniqueInput[]
    update?: AuthTokenUpdateWithWhereUniqueWithoutUserInput | AuthTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthTokenUpdateManyWithWhereWithoutUserInput | AuthTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthTokenScalarWhereInput | AuthTokenScalarWhereInput[]
  }

  export type CtfProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CtfProgressCreateWithoutUserInput, CtfProgressUncheckedCreateWithoutUserInput> | CtfProgressCreateWithoutUserInput[] | CtfProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CtfProgressCreateOrConnectWithoutUserInput | CtfProgressCreateOrConnectWithoutUserInput[]
    upsert?: CtfProgressUpsertWithWhereUniqueWithoutUserInput | CtfProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CtfProgressCreateManyUserInputEnvelope
    set?: CtfProgressWhereUniqueInput | CtfProgressWhereUniqueInput[]
    disconnect?: CtfProgressWhereUniqueInput | CtfProgressWhereUniqueInput[]
    delete?: CtfProgressWhereUniqueInput | CtfProgressWhereUniqueInput[]
    connect?: CtfProgressWhereUniqueInput | CtfProgressWhereUniqueInput[]
    update?: CtfProgressUpdateWithWhereUniqueWithoutUserInput | CtfProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CtfProgressUpdateManyWithWhereWithoutUserInput | CtfProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CtfProgressScalarWhereInput | CtfProgressScalarWhereInput[]
  }

  export type SkillsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillsCreateWithoutUserInput, SkillsUncheckedCreateWithoutUserInput> | SkillsCreateWithoutUserInput[] | SkillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutUserInput | SkillsCreateOrConnectWithoutUserInput[]
    upsert?: SkillsUpsertWithWhereUniqueWithoutUserInput | SkillsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillsCreateManyUserInputEnvelope
    set?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    disconnect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    delete?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    update?: SkillsUpdateWithWhereUniqueWithoutUserInput | SkillsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillsUpdateManyWithWhereWithoutUserInput | SkillsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type CtfLevelsCreateNestedOneWithoutCredentialsInput = {
    create?: XOR<CtfLevelsCreateWithoutCredentialsInput, CtfLevelsUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: CtfLevelsCreateOrConnectWithoutCredentialsInput
    connect?: CtfLevelsWhereUniqueInput
  }

  export type CtfLevelsUpdateOneRequiredWithoutCredentialsNestedInput = {
    create?: XOR<CtfLevelsCreateWithoutCredentialsInput, CtfLevelsUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: CtfLevelsCreateOrConnectWithoutCredentialsInput
    upsert?: CtfLevelsUpsertWithoutCredentialsInput
    connect?: CtfLevelsWhereUniqueInput
    update?: XOR<XOR<CtfLevelsUpdateToOneWithWhereWithoutCredentialsInput, CtfLevelsUpdateWithoutCredentialsInput>, CtfLevelsUncheckedUpdateWithoutCredentialsInput>
  }

  export type CtfLevelsCreatelinksInput = {
    set: string[]
  }

  export type CtfLevelsCreatecommandsInput = {
    set: string[]
  }

  export type CtfLevelsCreatehintsInput = {
    set: string[]
  }

  export type CredentialsCreateNestedOneWithoutCtflevelInput = {
    create?: XOR<CredentialsCreateWithoutCtflevelInput, CredentialsUncheckedCreateWithoutCtflevelInput>
    connectOrCreate?: CredentialsCreateOrConnectWithoutCtflevelInput
    connect?: CredentialsWhereUniqueInput
  }

  export type CredentialsUncheckedCreateNestedOneWithoutCtflevelInput = {
    create?: XOR<CredentialsCreateWithoutCtflevelInput, CredentialsUncheckedCreateWithoutCtflevelInput>
    connectOrCreate?: CredentialsCreateOrConnectWithoutCtflevelInput
    connect?: CredentialsWhereUniqueInput
  }

  export type CtfLevelsUpdatelinksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CtfLevelsUpdatecommandsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CtfLevelsUpdatehintsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type CredentialsUpdateOneWithoutCtflevelNestedInput = {
    create?: XOR<CredentialsCreateWithoutCtflevelInput, CredentialsUncheckedCreateWithoutCtflevelInput>
    connectOrCreate?: CredentialsCreateOrConnectWithoutCtflevelInput
    upsert?: CredentialsUpsertWithoutCtflevelInput
    disconnect?: CredentialsWhereInput | boolean
    delete?: CredentialsWhereInput | boolean
    connect?: CredentialsWhereUniqueInput
    update?: XOR<XOR<CredentialsUpdateToOneWithWhereWithoutCtflevelInput, CredentialsUpdateWithoutCtflevelInput>, CredentialsUncheckedUpdateWithoutCtflevelInput>
  }

  export type CredentialsUncheckedUpdateOneWithoutCtflevelNestedInput = {
    create?: XOR<CredentialsCreateWithoutCtflevelInput, CredentialsUncheckedCreateWithoutCtflevelInput>
    connectOrCreate?: CredentialsCreateOrConnectWithoutCtflevelInput
    upsert?: CredentialsUpsertWithoutCtflevelInput
    disconnect?: CredentialsWhereInput | boolean
    delete?: CredentialsWhereInput | boolean
    connect?: CredentialsWhereUniqueInput
    update?: XOR<XOR<CredentialsUpdateToOneWithWhereWithoutCtflevelInput, CredentialsUpdateWithoutCtflevelInput>, CredentialsUncheckedUpdateWithoutCtflevelInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type CtfProgressCreateWithoutCtfClaimedsInput = {
    id?: string
    ctfName: string
    user: UserCreateNestedOneWithoutCtfsProgressInput
  }

  export type CtfProgressUncheckedCreateWithoutCtfClaimedsInput = {
    id?: string
    ctfName: string
    username: string
  }

  export type CtfProgressCreateOrConnectWithoutCtfClaimedsInput = {
    where: CtfProgressWhereUniqueInput
    create: XOR<CtfProgressCreateWithoutCtfClaimedsInput, CtfProgressUncheckedCreateWithoutCtfClaimedsInput>
  }

  export type CtfProgressUpsertWithoutCtfClaimedsInput = {
    update: XOR<CtfProgressUpdateWithoutCtfClaimedsInput, CtfProgressUncheckedUpdateWithoutCtfClaimedsInput>
    create: XOR<CtfProgressCreateWithoutCtfClaimedsInput, CtfProgressUncheckedCreateWithoutCtfClaimedsInput>
    where?: CtfProgressWhereInput
  }

  export type CtfProgressUpdateToOneWithWhereWithoutCtfClaimedsInput = {
    where?: CtfProgressWhereInput
    data: XOR<CtfProgressUpdateWithoutCtfClaimedsInput, CtfProgressUncheckedUpdateWithoutCtfClaimedsInput>
  }

  export type CtfProgressUpdateWithoutCtfClaimedsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ctfName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCtfsProgressNestedInput
  }

  export type CtfProgressUncheckedUpdateWithoutCtfClaimedsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ctfName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutSkillsInput = {
    id?: string
    firstName: string
    LastName: string
    username: string
    email: string
    profileImage?: string | null
    bio?: string | null
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: AuthTokenCreateNestedManyWithoutUserInput
    ctfsProgress?: CtfProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSkillsInput = {
    id?: string
    firstName: string
    LastName: string
    username: string
    email: string
    profileImage?: string | null
    bio?: string | null
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: AuthTokenUncheckedCreateNestedManyWithoutUserInput
    ctfsProgress?: CtfProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSkillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
  }

  export type UserUpsertWithoutSkillsInput = {
    update: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type UserUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: AuthTokenUpdateManyWithoutUserNestedInput
    ctfsProgress?: CtfProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: AuthTokenUncheckedUpdateManyWithoutUserNestedInput
    ctfsProgress?: CtfProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ctfClaimedCreateWithoutCtfprogressInput = {
    id?: string
    levelNo: number
    password: string
  }

  export type ctfClaimedUncheckedCreateWithoutCtfprogressInput = {
    id?: string
    levelNo: number
    password: string
  }

  export type ctfClaimedCreateOrConnectWithoutCtfprogressInput = {
    where: ctfClaimedWhereUniqueInput
    create: XOR<ctfClaimedCreateWithoutCtfprogressInput, ctfClaimedUncheckedCreateWithoutCtfprogressInput>
  }

  export type ctfClaimedCreateManyCtfprogressInputEnvelope = {
    data: ctfClaimedCreateManyCtfprogressInput | ctfClaimedCreateManyCtfprogressInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCtfsProgressInput = {
    id?: string
    firstName: string
    LastName: string
    username: string
    email: string
    profileImage?: string | null
    bio?: string | null
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: AuthTokenCreateNestedManyWithoutUserInput
    skills?: SkillsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCtfsProgressInput = {
    id?: string
    firstName: string
    LastName: string
    username: string
    email: string
    profileImage?: string | null
    bio?: string | null
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: AuthTokenUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCtfsProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCtfsProgressInput, UserUncheckedCreateWithoutCtfsProgressInput>
  }

  export type ctfClaimedUpsertWithWhereUniqueWithoutCtfprogressInput = {
    where: ctfClaimedWhereUniqueInput
    update: XOR<ctfClaimedUpdateWithoutCtfprogressInput, ctfClaimedUncheckedUpdateWithoutCtfprogressInput>
    create: XOR<ctfClaimedCreateWithoutCtfprogressInput, ctfClaimedUncheckedCreateWithoutCtfprogressInput>
  }

  export type ctfClaimedUpdateWithWhereUniqueWithoutCtfprogressInput = {
    where: ctfClaimedWhereUniqueInput
    data: XOR<ctfClaimedUpdateWithoutCtfprogressInput, ctfClaimedUncheckedUpdateWithoutCtfprogressInput>
  }

  export type ctfClaimedUpdateManyWithWhereWithoutCtfprogressInput = {
    where: ctfClaimedScalarWhereInput
    data: XOR<ctfClaimedUpdateManyMutationInput, ctfClaimedUncheckedUpdateManyWithoutCtfprogressInput>
  }

  export type ctfClaimedScalarWhereInput = {
    AND?: ctfClaimedScalarWhereInput | ctfClaimedScalarWhereInput[]
    OR?: ctfClaimedScalarWhereInput[]
    NOT?: ctfClaimedScalarWhereInput | ctfClaimedScalarWhereInput[]
    id?: StringFilter<"ctfClaimed"> | string
    ctfProgressId?: StringFilter<"ctfClaimed"> | string
    levelNo?: IntFilter<"ctfClaimed"> | number
    password?: StringFilter<"ctfClaimed"> | string
  }

  export type UserUpsertWithoutCtfsProgressInput = {
    update: XOR<UserUpdateWithoutCtfsProgressInput, UserUncheckedUpdateWithoutCtfsProgressInput>
    create: XOR<UserCreateWithoutCtfsProgressInput, UserUncheckedCreateWithoutCtfsProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCtfsProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCtfsProgressInput, UserUncheckedUpdateWithoutCtfsProgressInput>
  }

  export type UserUpdateWithoutCtfsProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: AuthTokenUpdateManyWithoutUserNestedInput
    skills?: SkillsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCtfsProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: AuthTokenUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuthTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type AuthTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type AuthTokenCreateOrConnectWithoutUserInput = {
    where: AuthTokenWhereUniqueInput
    create: XOR<AuthTokenCreateWithoutUserInput, AuthTokenUncheckedCreateWithoutUserInput>
  }

  export type AuthTokenCreateManyUserInputEnvelope = {
    data: AuthTokenCreateManyUserInput | AuthTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CtfProgressCreateWithoutUserInput = {
    id?: string
    ctfName: string
    ctfClaimeds?: ctfClaimedCreateNestedManyWithoutCtfprogressInput
  }

  export type CtfProgressUncheckedCreateWithoutUserInput = {
    id?: string
    ctfName: string
    ctfClaimeds?: ctfClaimedUncheckedCreateNestedManyWithoutCtfprogressInput
  }

  export type CtfProgressCreateOrConnectWithoutUserInput = {
    where: CtfProgressWhereUniqueInput
    create: XOR<CtfProgressCreateWithoutUserInput, CtfProgressUncheckedCreateWithoutUserInput>
  }

  export type CtfProgressCreateManyUserInputEnvelope = {
    data: CtfProgressCreateManyUserInput | CtfProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SkillsCreateWithoutUserInput = {
    id?: string
    category: $Enums.Category
    uniqueId: string
  }

  export type SkillsUncheckedCreateWithoutUserInput = {
    id?: string
    category: $Enums.Category
    uniqueId: string
  }

  export type SkillsCreateOrConnectWithoutUserInput = {
    where: SkillsWhereUniqueInput
    create: XOR<SkillsCreateWithoutUserInput, SkillsUncheckedCreateWithoutUserInput>
  }

  export type SkillsCreateManyUserInputEnvelope = {
    data: SkillsCreateManyUserInput | SkillsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthTokenWhereUniqueInput
    update: XOR<AuthTokenUpdateWithoutUserInput, AuthTokenUncheckedUpdateWithoutUserInput>
    create: XOR<AuthTokenCreateWithoutUserInput, AuthTokenUncheckedCreateWithoutUserInput>
  }

  export type AuthTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthTokenWhereUniqueInput
    data: XOR<AuthTokenUpdateWithoutUserInput, AuthTokenUncheckedUpdateWithoutUserInput>
  }

  export type AuthTokenUpdateManyWithWhereWithoutUserInput = {
    where: AuthTokenScalarWhereInput
    data: XOR<AuthTokenUpdateManyMutationInput, AuthTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthTokenScalarWhereInput = {
    AND?: AuthTokenScalarWhereInput | AuthTokenScalarWhereInput[]
    OR?: AuthTokenScalarWhereInput[]
    NOT?: AuthTokenScalarWhereInput | AuthTokenScalarWhereInput[]
    id?: StringFilter<"AuthToken"> | string
    token?: StringFilter<"AuthToken"> | string
    expiresAt?: DateTimeFilter<"AuthToken"> | Date | string
    createdAt?: DateTimeFilter<"AuthToken"> | Date | string
    userId?: StringFilter<"AuthToken"> | string
  }

  export type CtfProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: CtfProgressWhereUniqueInput
    update: XOR<CtfProgressUpdateWithoutUserInput, CtfProgressUncheckedUpdateWithoutUserInput>
    create: XOR<CtfProgressCreateWithoutUserInput, CtfProgressUncheckedCreateWithoutUserInput>
  }

  export type CtfProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: CtfProgressWhereUniqueInput
    data: XOR<CtfProgressUpdateWithoutUserInput, CtfProgressUncheckedUpdateWithoutUserInput>
  }

  export type CtfProgressUpdateManyWithWhereWithoutUserInput = {
    where: CtfProgressScalarWhereInput
    data: XOR<CtfProgressUpdateManyMutationInput, CtfProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type CtfProgressScalarWhereInput = {
    AND?: CtfProgressScalarWhereInput | CtfProgressScalarWhereInput[]
    OR?: CtfProgressScalarWhereInput[]
    NOT?: CtfProgressScalarWhereInput | CtfProgressScalarWhereInput[]
    id?: StringFilter<"CtfProgress"> | string
    ctfName?: StringFilter<"CtfProgress"> | string
    username?: StringFilter<"CtfProgress"> | string
  }

  export type SkillsUpsertWithWhereUniqueWithoutUserInput = {
    where: SkillsWhereUniqueInput
    update: XOR<SkillsUpdateWithoutUserInput, SkillsUncheckedUpdateWithoutUserInput>
    create: XOR<SkillsCreateWithoutUserInput, SkillsUncheckedCreateWithoutUserInput>
  }

  export type SkillsUpdateWithWhereUniqueWithoutUserInput = {
    where: SkillsWhereUniqueInput
    data: XOR<SkillsUpdateWithoutUserInput, SkillsUncheckedUpdateWithoutUserInput>
  }

  export type SkillsUpdateManyWithWhereWithoutUserInput = {
    where: SkillsScalarWhereInput
    data: XOR<SkillsUpdateManyMutationInput, SkillsUncheckedUpdateManyWithoutUserInput>
  }

  export type SkillsScalarWhereInput = {
    AND?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
    OR?: SkillsScalarWhereInput[]
    NOT?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
    id?: StringFilter<"Skills"> | string
    category?: EnumCategoryFilter<"Skills"> | $Enums.Category
    uniqueId?: StringFilter<"Skills"> | string
    username?: StringFilter<"Skills"> | string
  }

  export type UserCreateWithoutTokensInput = {
    id?: string
    firstName: string
    LastName: string
    username: string
    email: string
    profileImage?: string | null
    bio?: string | null
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ctfsProgress?: CtfProgressCreateNestedManyWithoutUserInput
    skills?: SkillsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string
    firstName: string
    LastName: string
    username: string
    email: string
    profileImage?: string | null
    bio?: string | null
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ctfsProgress?: CtfProgressUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ctfsProgress?: CtfProgressUpdateManyWithoutUserNestedInput
    skills?: SkillsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ctfsProgress?: CtfProgressUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CtfLevelsCreateWithoutCredentialsInput = {
    password: string
    levelNo: number
    ctfName: string
    id?: string
    uniqueId: string
    goal: string
    links?: CtfLevelsCreatelinksInput | string[]
    description: string
    commands?: CtfLevelsCreatecommandsInput | string[]
    hints?: CtfLevelsCreatehintsInput | string[]
    expectedOutput?: string | null
    difficulty: $Enums.Difficulty
    category: $Enums.Category
    estimatedTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: string | null
  }

  export type CtfLevelsUncheckedCreateWithoutCredentialsInput = {
    password: string
    levelNo: number
    ctfName: string
    id?: string
    uniqueId: string
    goal: string
    links?: CtfLevelsCreatelinksInput | string[]
    description: string
    commands?: CtfLevelsCreatecommandsInput | string[]
    hints?: CtfLevelsCreatehintsInput | string[]
    expectedOutput?: string | null
    difficulty: $Enums.Difficulty
    category: $Enums.Category
    estimatedTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: string | null
  }

  export type CtfLevelsCreateOrConnectWithoutCredentialsInput = {
    where: CtfLevelsWhereUniqueInput
    create: XOR<CtfLevelsCreateWithoutCredentialsInput, CtfLevelsUncheckedCreateWithoutCredentialsInput>
  }

  export type CtfLevelsUpsertWithoutCredentialsInput = {
    update: XOR<CtfLevelsUpdateWithoutCredentialsInput, CtfLevelsUncheckedUpdateWithoutCredentialsInput>
    create: XOR<CtfLevelsCreateWithoutCredentialsInput, CtfLevelsUncheckedCreateWithoutCredentialsInput>
    where?: CtfLevelsWhereInput
  }

  export type CtfLevelsUpdateToOneWithWhereWithoutCredentialsInput = {
    where?: CtfLevelsWhereInput
    data: XOR<CtfLevelsUpdateWithoutCredentialsInput, CtfLevelsUncheckedUpdateWithoutCredentialsInput>
  }

  export type CtfLevelsUpdateWithoutCredentialsInput = {
    password?: StringFieldUpdateOperationsInput | string
    levelNo?: IntFieldUpdateOperationsInput | number
    ctfName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    links?: CtfLevelsUpdatelinksInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    commands?: CtfLevelsUpdatecommandsInput | string[]
    hints?: CtfLevelsUpdatehintsInput | string[]
    expectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    estimatedTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CtfLevelsUncheckedUpdateWithoutCredentialsInput = {
    password?: StringFieldUpdateOperationsInput | string
    levelNo?: IntFieldUpdateOperationsInput | number
    ctfName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    links?: CtfLevelsUpdatelinksInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    commands?: CtfLevelsUpdatecommandsInput | string[]
    hints?: CtfLevelsUpdatehintsInput | string[]
    expectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    estimatedTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CredentialsCreateWithoutCtflevelInput = {
    host: string
    username: string
    password?: string | null
    Port: number
  }

  export type CredentialsUncheckedCreateWithoutCtflevelInput = {
    host: string
    username: string
    password?: string | null
    Port: number
  }

  export type CredentialsCreateOrConnectWithoutCtflevelInput = {
    where: CredentialsWhereUniqueInput
    create: XOR<CredentialsCreateWithoutCtflevelInput, CredentialsUncheckedCreateWithoutCtflevelInput>
  }

  export type CredentialsUpsertWithoutCtflevelInput = {
    update: XOR<CredentialsUpdateWithoutCtflevelInput, CredentialsUncheckedUpdateWithoutCtflevelInput>
    create: XOR<CredentialsCreateWithoutCtflevelInput, CredentialsUncheckedCreateWithoutCtflevelInput>
    where?: CredentialsWhereInput
  }

  export type CredentialsUpdateToOneWithWhereWithoutCtflevelInput = {
    where?: CredentialsWhereInput
    data: XOR<CredentialsUpdateWithoutCtflevelInput, CredentialsUncheckedUpdateWithoutCtflevelInput>
  }

  export type CredentialsUpdateWithoutCtflevelInput = {
    host?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Port?: IntFieldUpdateOperationsInput | number
  }

  export type CredentialsUncheckedUpdateWithoutCtflevelInput = {
    host?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Port?: IntFieldUpdateOperationsInput | number
  }

  export type ctfClaimedCreateManyCtfprogressInput = {
    id?: string
    levelNo: number
    password: string
  }

  export type ctfClaimedUpdateWithoutCtfprogressInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelNo?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ctfClaimedUncheckedUpdateWithoutCtfprogressInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelNo?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ctfClaimedUncheckedUpdateManyWithoutCtfprogressInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelNo?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AuthTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type CtfProgressCreateManyUserInput = {
    id?: string
    ctfName: string
  }

  export type SkillsCreateManyUserInput = {
    id?: string
    category: $Enums.Category
    uniqueId: string
  }

  export type AuthTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CtfProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ctfName?: StringFieldUpdateOperationsInput | string
    ctfClaimeds?: ctfClaimedUpdateManyWithoutCtfprogressNestedInput
  }

  export type CtfProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ctfName?: StringFieldUpdateOperationsInput | string
    ctfClaimeds?: ctfClaimedUncheckedUpdateManyWithoutCtfprogressNestedInput
  }

  export type CtfProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ctfName?: StringFieldUpdateOperationsInput | string
  }

  export type SkillsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    uniqueId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    uniqueId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    uniqueId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}